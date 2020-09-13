let search=document.getElementById('searchUser');
let client_id="ca7c5845bc784cc06cc9";
let client_secret="28ff7483fa697f543b3e4cd00d6b903edb75c9ed";
let repos_count=5;
let repos_sort='created : asc';
search.addEventListener('keyup',function(){

let userName=document.getElementById('searchUser').value;

let xhr=new XMLHttpRequest();
let xhr1=new XMLHttpRequest();

xhr1.open('GET',`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
xhr.open('GET',`https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`,true);

xhr.onload=function(){
    let json=JSON.parse(this.responseText);
    console.log(this.responseText);
    document.getElementById('profile').innerHTML=`<div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" width="100px" height="100px" src="${json.avatar_url}">
            <a href="${json.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
            <span class="badge badge-primary">Public Repos : ${json.public_repos}</span>
            <span class="badge badge-primary">Public Gists : ${json.public_gists}</span>
            <span class="badge badge-primary">Followers : ${json.followers}</span>
            <span class="badge badge-primary">Following : ${json.following}</span>
        
            <br><br>

            <ul class="list-group">
                <li class="list-group-item">Company : ${json.company}</li>
                <li class="list-group-item">Website/Blog : ${json.blog}</li>
                <li class="list-group-item">Location : ${json.location}</li>
                <li class="list-group-item">Member Since : ${json.created_at}</li>
            </ul>
        </div>
    </div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
   `;

}
xhr1.onload=function(){
    let repojson=JSON.parse(this.responseText);
    str=``;
    repojson.forEach(function(e){
        str+=`<div class="card card-body">
        <div class="row">
            <div class="col-md-6">
                <a href="${e.html_url}" target="_blank">${e.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">Stars : ${e.stargazers_count}</span>
                <span class="badge badge-primary">Watchers : ${e.watchers_count}</span>
                <span class="badge badge-primary">Forks : ${e.forks_count}</span>
            </div>
        </div>
    </div>`
        
    });
    document.getElementById('repos').innerHTML=str;
}

xhr.send();
xhr1.send();
});