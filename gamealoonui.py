import web
import urllib2
import json

render = web.template.render('templates', base='main')
create = web.template.render('templates',base='editmain')

urls = (
        '/','Index',
        '/platform/(.*)','Platform',
        '/article/(.*)/','Article',
        '/article/(.*)/(.*)','SingleArticle',
        '/user/','User',
        '/(.*)','SingleUser'
        )

app = web.application(urls, globals())

class Index:
    def GET(self):                        
        url="http://192.168.0.102:9000/platform/all"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)        
        return render.index(jsonData)


class Platform:
    def GET(self, platform):
        if platform == 'all':            
            return web.redirect('/')
        url="http://192.168.0.102:9000/platform/"+platform        
        response = urllib2.urlopen(url)
        jsonData=json.load(response)                
        return render.index(jsonData)   


class Article:
    def GET(self,category):
        if "create" == category:
            return create.editarticle()      
        url="http://192.168.0.102:9000/articles/"+category+"/totalScore"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.article(jsonData)
    
class SingleArticle:
    def GET(self, username, title):      
        url="http://192.168.0.102:9000/article/"+username+"/"+title
        response = urllib2.urlopen(url)
        article=json.load(response)
        return render.singlearticle(article)
    
class User: 
    def GET(self):
        url="http://192.168.0.102:9000/users"
        response = urllib2.urlopen(url)
        jsonData=json.load(response)
        return render.user(jsonData)        
    
class SingleUser:
    def GET(self,username):
        url="http://192.168.0.102:9000/user/"+username
        response = urllib2.urlopen(url)
        user=json.load(response)
        return render.singleuser(user)
    
if __name__ == "__main__":
    
    app.run()    