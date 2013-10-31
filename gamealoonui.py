#!/usr/local/bin/python2.7

import os
import web
import urllib2
import urllib
import json
import time
from datetime import datetime

web.config.debug=False
curPath = os.path.dirname(__file__) 
urls = (
        '/','Index',
        '/login/','Login',
        '/logout/','Logout',
        '/signup/','Signup',
        '/search/','SearchHome',
        '/searchSite/','Search',
        '/media','Media',
        '/about','About',
        '/users','Users',
        '/games','Games',
        '/post/save','CreateOrUpdatePost',        
        '/platform/(.+)/(.+)','Platform',
        '/article/article-preview','ArticlePreview',
        '/article/updateATS','ArticleUpdateAverageTimeSpent',
        '/article/coolOrNotCool/','ArticleCoolOrNotCool',
        '/articles/(.+)/(.+)/(.+)','ArticleList',    
        '/article/(.+)/(.+)','SingleArticle',
        '/comment/save','CreateOrUpdateComment',   
        '/comment/get/(.+)/(.+)','GetComment',
        '/game/games','FetchGames',        
        '/user/getImages','FetchImages',
        '/user/validateEmail','ValidateEmail',
        '/user/validateUsername','ValidateUsername',
        '/user/save','CreateOrUpdateUser',
        '/user/followOrUnfollow','FollowOrUnfollow',
        '/user/gameInterestedOrNot','InterestedInorNotInGame',
        '/user/interest','CreateOrUpdateUserInterest',
        '/user/password/reset','ResetPassword',        
        '/game/(.+)','SingleGame',
        '/user/userstats','UserStats',
        '/profile/(.+)','UserProfile',        
        '/(.+)','SingleUser'                
        )

app = web.application(urls, globals())
store=web.session.DiskStore(curPath+'/sessions')
session = web.session.Session(app, store, initializer={'username':'Guest','userId':'Guest','loggedIn':False,'baseUrl':'http://162.144.38.150:9000','userAvatar':''})
web.config.session_parameters.update(cookie_name="test_cookie", cookie_domain="/",cookie_path=store,timeout="60")    
render = web.template.render(curPath+'/templates/', base='main', globals={'session':session})

class Index:
    def GET(self):       
        print "Session username---->", session.username
        print "Session loggedIn---->", session.loggedIn
        print "Session userId---->", session.userId
        print "Session userAvatar---->", session.userAvatar     
        print "Session baseUrl---->", session.baseUrl                                        
        url="http://localhost:9000/platform/all/all"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)        
        session.baseUrl=jsonData['baseUrl']
        if  not session.userAvatar:
            session.userAvatar=session.baseUrl+"/assets/images/default/avatar.png"
        return render.index(jsonData)


class Platform:
    def GET(self, platform, category):        
        if platform == 'all':            
            return web.redirect('/')
        url="http://localhost:9000/platform/"+platform+"/"+category        
        response = urllib2.urlopen(url)
        jsonData=json.load(response)                
        return render.index(jsonData)   


class Article:
    def GET(self,category):            
        url="http://localhost:9000/articles/"+category+"/totalScore"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.article(jsonData)
    
class SingleArticle:
    def GET(self, username, titleOrId):      
        currentUser = session.username
        url="http://localhost:9000/article/"+currentUser+"/"+titleOrId
        print "URL: ",url
        response = urllib2.urlopen(url)
        article=json.load(response)
        print "article json: ", article
        if "-" not in titleOrId:
            print"Dumped JSON: ",json.dumps(article)
            return json.dumps(article) 
        else:
            return render.singlearticle(article)
        
class ArticleList:
    def GET(self, carosuselSelector, category, mode):            
        timestampMap=web.input()
        timestamp = timestampMap.timestamp                
        url="http://localhost:9000/articles/"+carosuselSelector+"/"+category+"/"+timestamp+"/"+mode        
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        articleList=json.load(response)
        return json.dumps(articleList)

class ArticleCoolOrNotCool:
    def POST(self):
        votingStatusMap = web.input()
        votingStatustype = votingStatusMap.type
        articleId = votingStatusMap.articleId
        url="http://localhost:9000/article/votingStateUpdate"
        values={"type":votingStatustype, "articleId":articleId, "username":session.username}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)              
        response = urllib2.urlopen(request)
        articleVotingStatus=json.load(response)
        return json.dumps(articleVotingStatus)
    
class FetchGames:
    def GET(self):
        termInput = web.input()
        term = termInput.term
        url="http://localhost:9000/game/fetchGame/games/"+term        
        response = urllib2.urlopen(url)
        games=json.load(response)        
        return json.dumps(games)        
        
        
class SingleGame:
    def GET(self, gameUrlOrId):
        url="http://localhost:9000/game/"+gameUrlOrId+"/"+session.username       
        response = urllib2.urlopen(url)
        gameJson=json.load(response)
        return render.singlegame(gameJson)
    
class UserProfile:
    def GET(self,userid):        
        if session.userId == userid:
            url="http://localhost:9000/user/"+userid+"/1/"+session.username
            response = urllib2.urlopen(url)
            user=json.load(response)
            print "USERPROFILE JSON", user
            return render.userprofile(user)
        else:
            return web.redirect("/") 
        
        
class User: 
    def GET(self):
        url="http://localhost:9000/users"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.user(jsonData)
            
class FetchImages:
    def GET(self):
        timestamp=web.input()        
        url="http://localhost:9000/media/images/"+session.username+"/"+timestamp.timestamp
        response = urllib2.urlopen(url)
        images=json.load(response)
        print json.dumps(images)
        return json.dumps(images)
          

class SingleUser:
    def GET(self,username):
        url="http://localhost:9000/user/"+username+"/2/"+session.username
        response = urllib2.urlopen(url)
        user=json.load(response)
        return render.singleuser(user)

class UserStats:
    def GET(self):
        return "success"
    
class CreateOrUpdatePost:
    def POST(self):
        articleFormData = web.input()                
        articleId=articleFormData.articleId
        print "Article Id:",articleFormData.articleId
        print "Article Title: ", articleFormData.title        
        print "Article SubTitle: ", articleFormData.subTitle
        print "Article Body: ", articleFormData.body
        print "Article Category: ",articleFormData.category
        print "Article UserName: ",session.username
        print "Article Platforms: ",articleFormData.platforms
        print "Article State: ",articleFormData.articleState
        print "Article featured image url: ",articleFormData.featuredImage
        print "Article game score: ",articleFormData.gameScore
        print "Article game Id: ",articleFormData.gameId
        url="http://localhost:9000/article/save"                                            
        values={"gameScore":articleFormData.gameScore,"articleId":articleId,"articleTitle":articleFormData.title, "articleSubTitle":articleFormData.subTitle, "articleBody":articleFormData.body, "articleCategory":articleFormData.category
                , "articleUsername":session.username, "articlePlatforms":articleFormData.platforms,"articleFeaturedImage":articleFormData.featuredImage,"articleGameId":articleFormData.gameId, "articleState":articleFormData.articleState}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        articleCreationStatus = json.load(response)
        articleCreationStatus['userId']=session.userId
        print articleCreationStatus
        return json.dumps(articleCreationStatus)         
       

class CreateOrUpdateComment:
    def POST(self):
        commentData = web.input()
        print "Comment article Id:",commentData.articleId
        print "Comment message: ", commentData.message        
        print "Comment userName: ", commentData.userName
        print "Comment commentScore: ", commentData.commentScore
        print "Comment spamScore: ",commentData.spamScore     
        
        url="http://localhost:9000/converse/comment/save"   
        commentJson ={"articleId":commentData.articleId,"message":commentData.message, "userName":commentData.userName, "commentScore":commentData.commentScore,"spamScore":commentData.spamScore}
        data=urllib.urlencode(commentJson)        
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        print response
        comment = json.load(response)
        print json.dumps(comment)
        return json.dumps(comment)

class CreateOrUpdateUser:
    def POST(self):
        userData = web.input()
        print "User exist: ",userData.userExist
        print "User userName: ",userData.userName
        print "User firstName: ",userData.userFirstName
        print "User lastName: ",userData.userLastName
        print "User country: ",userData.country
        print "User birthday: ",userData.birthday
        print "User birthdayVisibility: ",userData.birthdayVisibility
        print "User gameBio: ",userData.gameBio
        birthDay = userData.birthday        
        birthDayDate = datetime.strptime(birthDay, "%m/%d/%Y")
        print "day: ",birthDayDate.day
        print "month: ",birthDayDate.month
        print "year: ",birthDayDate.year
        userJson ={"firstName":userData.userFirstName,"lastName":userData.userLastName, "country":userData.country, "day":birthDayDate.day,"month":birthDayDate.month,"year":birthDayDate.year, "birthdayVisibility":userData.birthdayVisibility, "gameBio":userData.gameBio}
        url="http://localhost:9000/user/save/"+session.username
        data=urllib.urlencode(userJson)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        userStatus =json.load(response)        
        return json.dumps(userStatus)

class CreateOrUpdateUserInterest:
    def POST(self):
        interestData = web.input()
        print "Interest Type", interestData.type
        print "Interest content", interestData.content
        requestJson={'type':interestData.type, 'content':interestData.content}
        url="http://localhost:9000/user/interest/"+session.username
        requestJsonEncoded = urllib.urlencode(requestJson)
        print "requestJsonEncoded: ",requestJsonEncoded
        request = urllib2.Request(url, requestJsonEncoded)
        response = urllib2.urlopen(request)
        interest = json.load(response)        
        return json.dumps(interest)

class ResetPassword:
    def POST(self):
        passwordData = web.input()
        print "Current Password", passwordData.current
        print "New Password", passwordData.newPass
        print "Confirm Password", passwordData.confirm
        newPass=passwordData.newPass
        newPassConfirm=passwordData.confirm
        if newPass != newPassConfirm:
            passwordStatus={'type':1,'status':'fail'}
            return json.dumps(passwordStatus)        
        else:
            passwordResponse={'old':passwordData.current, 'new':newPass}
            url="http://localhost:9000/user/password/change/"+session.username
            requestJsonEncoded = urllib.urlencode(passwordResponse)
            request = urllib2.Request(url, requestJsonEncoded)
            response = urllib2.urlopen(request)
            passwordStatus = json.load(response)
            passwordStatus['type']=2        
            return json.dumps(passwordStatus)
                 
class GetComment:
    def GET(self, articleId, lastTimeStamp):        
        url="http://localhost:9000/converse/comment/get/"+articleId+"/"+lastTimeStamp
        response = urllib2.urlopen(url)
        comment=json.load(response)
        return json.dumps(comment)
                        
class ArticlePreview:
    def POST(self):
        previewData = web.input()        
        print "previewData: ", previewData
        web.header("X-XSS-Protection","0")      
        print "gameScore ",previewData.pGameScore       
        score= float(previewData.pGameScore)/10   
        previewPage={"title":previewData.ptitle, "subTitle":previewData.psubTitle, "body":previewData.pbody, "featuredImage":previewData.pfeaturedImageUrl, "category":previewData.pcategory,"gameBio":previewData.puserGameBio,"username":previewData.puserName,"articleGame":previewData.pGame, "articleGameBoxShot":previewData.pGameBoxShot,"gameScore":score}
        return render.postpreview(previewPage)        

class ArticleUpdateAverageTimeSpent:
    def POST(self):
        print "this is called"
        atsMap = web.input()
        timeSpent = atsMap.elapsedTime #in minutes
        articleId = atsMap.articleId
        print "timeSpent", timeSpent
        print "articleId", articleId
        url="http://localhost:9000/article/updateAverageTimeSpent"
        values={"timeSpent":timeSpent, "articleId":articleId}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        articleATSstatus = json.load(response)                
        return json.dumps(articleATSstatus)
          
class Login:
    def POST(self):
        sFormData = web.input()        
        url="http://localhost:9000/login"
        values={"usernameOrEmail":sFormData.username, "password":sFormData.password}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)        
        user=json.load(response)        
        
        if user['status']=="success":            
            session.username=user['username']
            session.userId=user['userid']
            session.loggedIn=True  
            session.userAvatar = user['userAvatar']
                                        
        print "returning json dump"  
        print "Session username in login---->", session.username
        print "Session loggedIn in login---->", session.loggedIn
        print "Session userid in login---->", session.userId
        print "Session useravatar in login---->", session.userAvatar          
        print"JSON", json.dumps(user)
        return json.dumps(user)    
        
class Logout:
    def GET(self):
        session.username="Guest"
        session.userId="Guest"
        session.loggedIn=False   
        session.userAvatar=session.baseUrl+"/assets/images/default/avatar.png"
        session.kill()             
        return "done"
    
class Signup:
    
    def POST(self):
        sFormData=web.input()
        url="http://localhost:9000/user/register"
        values={"username":sFormData.username, "password":sFormData.password, "email":sFormData.email, "firstName": sFormData.first, "lastName":sFormData.last}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        registrationStatus = json.load(response)
        print "Registration status:-> ", registrationStatus
        return json.dumps(registrationStatus)                       
       
class Search:
    
    def GET(self):                        
        query=web.input()            
        url="http://localhost:9000/search/q="+query.searchbox        
        response = urllib2.urlopen(url)        
        responseQuery=json.load(response)        
        return render.search(responseQuery)            


class InterestedInorNotInGame:
    def POST(self):
        gameInterestMap = web.input()
        originalUser = session.username
        gameId =gameInterestMap.gameId
        interactionType = gameInterestMap.type
        url="http://localhost:9000/user/interestedOrNotInGame"
        values={"originalUser":originalUser, "gameId":gameId, "type":interactionType}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        gameInterestedStatus = json.load(response)
        return json.dumps(gameInterestedStatus)
    
class FollowOrUnfollow:
    def POST(self):
        socialInteractionMap = web.input()
        originalUser = session.username
        buddyUser =socialInteractionMap.buddyUsername
        interactionType = socialInteractionMap.type
        url="http://localhost:9000/user/addOrRemoveBuddy"
        values={"originalUser":originalUser, "buddyUser":buddyUser, "type":interactionType}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        socialInterestedStatus = json.load(response)
        return json.dumps(socialInterestedStatus)
            
class Media:
    def GET(self):                 
        timestamp = int(time.time())               
        print timestamp
        url="http://localhost:9000/articles/all/video/"+str(timestamp*1000)+"/1"               
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        videos=json.load(response)        
        return render.media(videos)

class Users:
    def GET(self):                         
        url="http://localhost:9000/users"               
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        users=json.load(response)        
        return render.users(users)
    
class Games:
    def GET(self):                         
        url="http://localhost:9000/games"               
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        games=json.load(response)        
        return render.games(games)           

class ValidateEmail:
    def GET(self):
        emailMap = web.input()
        url="http://localhost:9000/user/validateEmail/"+emailMap.email
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        emailStatus = json.load(response)
        return json.dumps(emailStatus)

class ValidateUsername:
    def GET(self):        
        usernameMap = web.input()
        url="http://localhost:9000/user/validateUsername/"+usernameMap.username
        request = urllib2.Request(url)        
        response = urllib2.urlopen(request)
        usernameStatus = json.load(response)
        return json.dumps(usernameStatus)            
        
class About:    
    def GET(self):
        return render.about()
        
if __name__ == "__main__":        
        print "APP STARTED..."
        #initiate search engine over here
        app.run()    
