import web
import urllib2
import urllib
import json

web.config.debug=False

urls = (
        '/','Index',
        '/login/','Login',
        '/logout/','Logout',
        '/signup/','Signup',
        '/search/','SearchHome',
        '/searchSite/','Search',
        '/post/create','CreateOrUpdatePost',        
        '/platform/(.*)','Platform',
        '/article/article-preview','ArticlePreview',
        '/article/(.*)/','Article',
        '/article/(.*)/(.*)','SingleArticle',           
        '/user/','User',
        '/profile/(.*)','UserProfile',        
        '/(.*)','SingleUser'                
        )

app = web.application(urls, globals())
store=web.session.DiskStore('sessions')
session = web.session.Session(app, store, initializer={'username':'Guest','userId':'Guest','loggedIn':False})
web.config.session_parameters.update(cookie_name="test_cookie", cookie_domain="/",cookie_path=store,timeout="60")    
render = web.template.render('templates/', base='main', globals={'session':session})



class Index:
    def GET(self):       
        print "Session username---->", session.username
        print "Session loggedIn---->", session.loggedIn
        print "Session userId---->", session.userId                                 
        url="http://localhost:9000/platform/all"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)        
        return render.index(jsonData)


class Platform:
    def GET(self, platform):        
        if platform == 'all':            
            return web.redirect('/')
        url="http://localhost:9000/platform/"+platform        
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
    def GET(self, username, title):      
        url="http://localhost:9000/article/"+username+"/"+title
        response = urllib2.urlopen(url)
        article=json.load(response)
        print "article json",article
        return render.singlearticle(article)

class UserProfile:
    def GET(self,userid):        
        if session.userId == userid:
            url="http://localhost:9000/user/"+userid+"/1"
            response = urllib2.urlopen(url)
            user=json.load(response)
            return render.userprofile(user)
        else:
            return web.redirect("/") 
        
        
class User: 
    def GET(self):
        url="http://localhost:9000/users"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.user(jsonData)        
    
class SingleUser:
    def GET(self,username):
        url="http://localhost:9000/user/"+username+"/2"
        response = urllib2.urlopen(url)
        user=json.load(response)
        return render.singleuser(user)

class CreateOrUpdatePost:
    def POST(self):
        articleFormData = web.input()
        multipleData= web.input(platform=[])
        checkBoxData=web.input(isGame=[])
        print "Article Title: ", articleFormData.title        
        print "Article SubTitle: ", articleFormData.subtitle
        print "Article Body: ", articleFormData.editor
        print "Article Category: ",articleFormData.category
        print "Article UserName: ",session.username
        print "Article Platform: ",multipleData.platform
        print "Is Game Selected: ",checkBoxData.isGame        
        url="http://localhost:9000/article/save"
        values={"articleTitle":articleFormData.title, "articleSubTitle":articleFormData.subtitle, "articleBody":articleFormData.editor, "articleCategory":articleFormData.category
                , "articleUsername":session.username, "articlePlatform":json.dumps(multipleData.platform),"articleFeaturedImage":"featured image path","articleGame":"", "articleState":"1"}
        data=urllib.urlencode(values)
        request = urllib2.Request(url,data)
        response = urllib2.urlopen(request)
        print response
        web.redirect("/profile/"+session.userId)
        
class ArticlePreview:
    def GET(self):
        test="test"
        return render.postpreview(test)        
class Login:
    def POST(self):
        sFormData = web.input()        
        url="http://localhost:9000/login/"+sFormData.username+"/"+sFormData.password
        response = urllib2.urlopen(url)
        user=json.load(response)        
        
        if user['available']:            
            session.username=user['username']
            session.userId=user['userid']
            session.loggedIn=True  
                                        
        print "returning json dump"  
        print "Session username in login---->", session.username
        print "Session loggedIn in login---->", session.loggedIn
        print "Session userid in login---->", session.userId     
        print"JSON", json.dumps(user)
        return json.dumps(user)    
        
class Logout:
    def GET(self):
        session.username="Guest"
        session.userId="Guest"
        session.loggedIn=False   
        session.kill()             
        return "done"
    
class Signup:
    
    def POST(self):
        sFormData=web.input()
        url="http://localhost:9000/user/register"
        values={"username":sFormData.username, "password":sFormData.password, "email":sFormData.email}
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
            
class SearchHome:
    
    def GET(self):
        responseQuery={}
        responseQuery['queryResponse']=[]
        return render.search(responseQuery)
    
if __name__ == "__main__":        
        app.run()    