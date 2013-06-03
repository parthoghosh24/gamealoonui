import web
import urllib2
import json


web.config.debug=False
web.config.session_parameters['cookie_name'] = 'webpy_session_id'
web.config.session_parameters['cookie_domain'] = None
web.config.session_parameters['timeout'] = 86400, #24 * 60 * 60, # 24 hours   in seconds
web.config.session_parameters['ignore_expiry'] = True
web.config.session_parameters['ignore_change_ip'] = True
web.config.session_parameters['secret_key'] = 'fLjUfxqXtfNoIldA0A0J'
web.config.session_parameters['expired_message'] = 'Session expired'


urls = (
        '/','Index',
        '/login/','Login',
        '/search/','SearchHome',
        '/searchSite/','Search',
        '/platform/(.*)','Platform',
        '/article/(.*)/','Article',
        '/article/(.*)/(.*)','SingleArticle',
        '/user/','User',        
        '/(.*)','SingleUser'   
             
        )

app = web.application(urls, globals())
session = web.session.Session(app,web.session.DiskStore('sessions'), {'count': 0})
render = web.template.render('templates', base='main', globals={'session':session})
create = web.template.render('templates',base='editmain',globals={'context':session})

class Index:
    def GET(self):                        
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
        if "create" == category:
            return create.editarticle()      
        url="http://localhost:9000/articles/"+category+"/totalScore"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.article(jsonData)
    
class SingleArticle:
    def GET(self, username, title):      
        url="http://localhost:9000/article/"+username+"/"+title
        response = urllib2.urlopen(url)
        article=json.load(response)
        return render.singlearticle(article)
    
class User: 
    def GET(self):
        url="http://localhost:9000/users"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.user(jsonData)        
    
class SingleUser:
    def GET(self,username):
        url="http://localhost:9000/user/"+username
        response = urllib2.urlopen(url)
        user=json.load(response)
        return render.singleuser(user)
    
class Login:
    def POST(self):
        sFormData = web.input()        
        url="http://localhost:9000/user/"+sFormData.username+"/"+sFormData.password
        response = urllib2.urlopen(url)
        user=json.load(response)
        web.header('Content-Type', 'application/json')    
        return json.dumps(user)                    
       
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