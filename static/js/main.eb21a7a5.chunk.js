(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){e.exports=a.p+"static/media/no-profile-img.b6681619.png"},25:function(e,t,a){e.exports=a.p+"static/media/no-image.810e687f.png"},31:function(e,t,a){e.exports=a(50)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),l=a(11),s=a.n(l),n=(a(36),a(5)),i=a(6),c=a(8),m=a(7),u=a(9),d=a(3),h=(a(37),a(51)),p=a(4),v=a.n(p),f=(a(20),a(15)),g=(a(38),a(10)),b=(a(42),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={size:55,value:0,strokewidth:3},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.percentage,t=.5*this.state.size,a=t-.5*this.state.strokewidth,o=2*Math.PI*a,l=e*o/100+" "+o,s={strokeWidth:this.state.strokewidth},n={strokeWidth:this.state.strokewidth,strokeDasharray:l},i="rotate(-90 "+t+","+t+")";return r.a.createElement("svg",{width:63,height:63},r.a.createElement("circle",{r:a,cx:t-2.5,cy:t+3,transform:i,style:s,className:"circle-background"}),r.a.createElement("circle",{r:a,cx:t-2.5,cy:t+3,transform:i,style:n,className:"circle-progress"}),r.a.createElement("text",{className:"circle-text",x:"46%",y:"53%",dy:".3em",textAnchor:"middle",style:{fontSize:"28px"}},this.props.percentage),r.a.createElement("text",{className:"circle-text-percent",x:"76%",y:"48%",textAnchor:"middle",style:{fontSize:"10px"}},"%"))}}]),t}(r.a.Component)),y=a(28),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1},a.closeModal=a.closeModal.bind(Object(d.a)(Object(d.a)(a))),a.updateFocus=a.updateFocus.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this),!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler)}},{key:"componentWillReceiveProps",value:function(e){this.setState({isOpen:e.isOpen})}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var a in e)e.hasOwnProperty(a)&&null!==e[a]&&(t+=a+"="+e[a]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),a=Number(t[0]);return 100*Number(t[1])/a+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return r.a.createElement(y.a,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},function(){return e.state.isOpen?r.a.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},r.a.createElement("div",{className:e.props.classNames.modalVideoBody},r.a.createElement("div",{className:e.props.classNames.modalVideoInner},r.a.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},r.a.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),r.a.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null})}}]),t}(r.a.Component);E.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}};var k=a(17),w="eecba05d00048fe0d5d543c51d4e8e65",N="https://api.themoviedb.org/3",C="https://image.tmdb.org/t/p",O=a(24),S=a.n(O),j=a(25),_=a.n(j),M=(a(47),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).saveNum=function(e){var t=localStorage.getItem("watchlist"),o=[],r="";t?((o=JSON.parse(t)).push(a.state.num),r=o.map(function(e){return e.id}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(e){return o[e]}).map(function(e){return o[e]}),localStorage.setItem("watchlist",JSON.stringify(r))):((o=[]).push(a.state.num),localStorage.setItem("watchlist",JSON.stringify(o))),console.log("unique"),console.log(r),a.setState({isSaved:!0})},a.state={isOpen:!1,isSaved:!1},a.openModal=a.openModal.bind(Object(d.a)(Object(d.a)(a))),a.getMovieinfo(),a.getcast(),a.getbackground(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getMovieinfo",value:function(){var e=this,t=this.props.movieid,a=N+"/movie/"+t+"?api_key="+w+"&language=en-US";v.a.ajax({url:a,success:function(t,a,o){var r=t.title,l=t.overview,s=C+"/original"+t.poster_path,n=new Date(t.release_date).getFullYear(),i=t.runtime,c=i%60,m=(i-c)/60,u=t.vote_average;if(!Object(g.isNull)(t.belongs_to_collection)){var d=t.belongs_to_collection.id;e.getRelatedMovie(d)}e.setState({title:r,overview:l,cover:s,year:n,time:m+"h "+c+"m",score:10*u,num:t})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getRelatedMovie",value:function(e){var t=this;if(!Object(g.isNull)(e)){var a=N+"/collection/"+e+"?api_key="+w+"&language=en-US";v.a.ajax({url:a,success:function(e){var a=e.parts,o=[];a.forEach(function(e){Object(g.isNull)(e.poster_path)?e.poster_src=_.a:e.poster_src=C+"/original"+e.poster_path;var t=r.a.createElement("span",{key:e.id},r.a.createElement("img",{src:e.poster_src,alt:"img"}),r.a.createElement("p",null,e.original_title));o.push(t)}),t.setState({rows:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}}},{key:"getcast",value:function(){var e=this,t=this.props.movieid,a=N+"/movie/"+t+"/credits?api_key="+w;v.a.ajax({url:a,success:function(t){var a=t.cast,o=t.crew,l=[],s=[],n=[],i=[],c=[];a.forEach(function(e,t){if(t<5){var a=S.a;Object(g.isNull)(e.profile_path)||(a=C+"/original"+e.profile_path);var o=r.a.createElement("div",{className:"card casts",key:e.id},r.a.createElement("img",{src:a,alt:"cast img"}),r.a.createElement("div",{className:"card-body"},e.name,r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#50E3C2"}},e.character)));l.push(o)}}),o.forEach(function(e){if(!Object(g.isNull)(e.job)){var t=e.job.toLowerCase();if("director"===t){var a=r.a.createElement("div",{className:"col-6",key:e.id},r.a.createElement("span",{className:"job"},e.job," "),r.a.createElement("span",{className:"name"},e.name));s.push(a)}else if("writer"===t){var o=r.a.createElement("div",{className:"col-6",key:e.id},r.a.createElement("span",{className:"job"},e.job," "),r.a.createElement("span",{className:"name"},e.name));n.push(o)}else if("story"===t){var l=r.a.createElement("div",{className:"col-6",key:e.id},r.a.createElement("span",{className:"job"},e.job," "),r.a.createElement("span",{className:"name"},e.name));i.push(l)}}}),c.push(s),c.push(n),c.push(i),e.setState({casts:l,crews:c})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"getbackground",value:function(){var e=this,t=this.props.movieid,a=N+"/movie/"+t+"/images?api_key="+w;v.a.ajax({url:a,success:function(t){var a=t.backdrops,o=[];a.forEach(function(e,t){if(t<4){var a=C+"/original"+e.file_path,l=r.a.createElement("div",{className:"bgimg",key:t},r.a.createElement("img",{src:a,alt:"cover img"}));o.push(l)}}),e.setState({bgimgs:o})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"openModal",value:function(){var e=this,t=this.props.movieid,a=N+"/movie/"+t+"/videos?api_key="+w+"&language=en-US";v.a.ajax({url:a,success:function(t){var a,o;t.results.forEach(function(e,t){t<1&&(a=e.key,o=e.site)}),o=o.toLowerCase(),e.setState({videokey:a,videosite:o})},error:function(e,t,a){console.error("Failed to fetch data")}}),this.setState({isOpen:!0})}},{key:"removeItem",value:function(){var e=localStorage.getItem("watchlist"),t=JSON.parse(e),a=t.map(function(e){return e.id}).indexOf(this.props.movieid);console.log(a);var o=t.map(function(e){return e.id}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(e){return e!==a}).map(function(e){return t[e]});localStorage.setItem("watchlist",JSON.stringify(o)),this.setState({isSaved:!1})}},{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("watchlist");(t=JSON.parse(t))&&(console.log(t),t.forEach(function(t){e.props.movieid===t.id&&e.setState({isSaved:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"popupbody"},r.a.createElement("button",{onClick:this.props.close,className:"backbtn"},r.a.createElement("svg",{height:"25",width:"25",style:{marginTop:"0",background:"none"}},r.a.createElement("circle",{cx:"10",cy:"10",r:"7",stroke:"#50E3C2",strokeWidth:"2",fill:"none"}),r.a.createElement("polyline",{points:"12,13 8,10  12,7",style:{fill:"none",stroke:"#50E3C2",strokeWidth:2}})),"Back to the list"),r.a.createElement(E,{channel:this.state.videosite,isOpen:this.state.isOpen,videoId:this.state.videokey,onClose:function(){return e.setState({isOpen:!1})}}),r.a.createElement("div",null,r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:this.state.cover,id:"coverimg",alt:"cover img"}),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"icontxt"},r.a.createElement(k.a,{style:{fontSize:"20px",background:"#2B3247"}}),"\xa0\xa0Bookmark"),r.a.createElement("p",{className:"icontxt",onClick:this.state.isSaved?this.removeItem.bind(this):this.saveNum.bind(this)},this.state.isSaved?r.a.createElement(k.b,{style:{fontSize:"20px",background:"#2B3247"}}):r.a.createElement(k.c,{style:{fontSize:"20px",background:"#2B3247"}}),"\xa0\xa0",this.state.isSaved?"Remove from Watchlist":"Add Watchlist")),r.a.createElement("br",null),r.a.createElement("p",{className:"subtitle"},"Related Movies"),r.a.createElement("div",{className:"row related"},this.state.rows)),r.a.createElement("div",{className:"divright"},r.a.createElement("h5",{id:"title"},this.state.title),r.a.createElement("div",{className:"heading"},r.a.createElement("div",{id:"userscore",style:{width:"10%",display:"inline-block"}},r.a.createElement(b,{percentage:this.state.score}),r.a.createElement("br",null),r.a.createElement("p",null,"User Score")),r.a.createElement("div",{id:"play",onClick:this.openModal},r.a.createElement("div",{className:"circle"},r.a.createElement("svg",{id:"triangle"})),r.a.createElement("span",null,"Play Trailer")),r.a.createElement("table",{id:"infotable"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Genres"),r.a.createElement("td",null,this.props.genre)),r.a.createElement("tr",null,r.a.createElement("td",null,"Release Year"),r.a.createElement("td",null,this.state.year)),r.a.createElement("tr",null,r.a.createElement("td",null,"Duration"),r.a.createElement("td",null,this.state.time))))),r.a.createElement("hr",{className:"stroke"}),r.a.createElement("p",{className:"subtitle"},"Overview"),r.a.createElement("p",{style:{textAlign:"justify",color:"#8C93AA",fontSize:"15px",lineHeight:"20px"}},this.state.overview),r.a.createElement("p",{className:"subtitle"},"Feature Crew"),r.a.createElement("div",{className:"row"},this.state.crews),r.a.createElement("hr",{className:"stroke"}),r.a.createElement("p",{className:"subtitle"},"Top Billed Cast"),r.a.createElement("div",{className:"row cast"},this.state.casts),r.a.createElement("hr",{style:{marginTop:"-1em"},className:"stroke"}),r.a.createElement("p",{className:"subtitle"},"Backgrounds"),this.state.bgimgs)))}}]),t}(r.a.Component)),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={open:!1},a.openModal=a.openModal.bind(Object(d.a)(Object(d.a)(a))),a.closeModal=a.closeModal.bind(Object(d.a)(Object(d.a)(a))),a.getMovieGenre(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getMovieGenre",value:function(){var e=this,t=this.props.movie.id,a=N+"/movie/"+t+"?api_key="+w+"&language=en-US";v.a.ajax({url:a,success:function(t){var a=t.genres,o=[],r="";a.forEach(function(e){o.push(e.name)}),o.forEach(function(e,t){t===o.length-1?r+=e:r+=e+","}),e.setState({rows:r,rating:t.vote_average})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"openModal",value:function(){this.setState({open:!0}),console.log("clicked.......")}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"card",style:{border:"none",background:"transparent"}},r.a.createElement("img",{alt:"no available",width:"210",height:"315",src:this.props.movie.poster_src}),r.a.createElement("div",{className:"card-img-overlay",onClick:this.openModal},r.a.createElement("center",null,r.a.createElement("p",{className:"summary-title"},this.props.movie.title),r.a.createElement("p",{className:"summary"},this.props.movie.overview))),r.a.createElement(f.a,{modal:!0,open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal,lockScroll:!0},r.a.createElement(M,{movieid:this.props.movie.id,close:this.closeModal,genre:this.state.rows})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"title"},this.props.movie.title),r.a.createElement("div",{className:"row",id:"card-info"},r.a.createElement("div",{className:"col-8"},r.a.createElement("p",{className:"genre "},"Genre:\xa0",r.a.createElement("span",null,this.state.rows))),r.a.createElement("div",{className:"col-4",style:{textAlign:"right",paddingRight:0}},r.a.createElement("p",{className:"year "},"Year: ",r.a.createElement("span",null,this.props.movie.year))))),r.a.createElement("div",{className:"rating"},r.a.createElement("p",null,this.state.rating)))}}]),t}(r.a.Component),F=a(14),B=(a(48),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={open:!1,show:""},a.openModal=a.openModal.bind(Object(d.a)(Object(d.a)(a))),a.closeModal=a.closeModal.bind(Object(d.a)(Object(d.a)(a))),a.getMovieGenre(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getMovieGenre",value:function(){var e=this,t=this.props.movie.id,a=N+"/movie/"+t+"?api_key="+w+"&language=en-US";v.a.ajax({url:a,success:function(t){var a=t.genres,o=[],r="";a.forEach(function(e){o.push(e.name)}),o.forEach(function(e,t){t===o.length-1?r+=e:r+=e+","}),e.setState({rows:r,rating:t.vote_average})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"openModal",value:function(){this.setState({open:!0})}},{key:"closeModal",value:function(){this.setState({open:!1})}},{key:"removeItem",value:function(){var e=localStorage.getItem("watchlist"),t=JSON.parse(e),a=t.map(function(e){return e.id}).indexOf(this.props.movie.id),o=t.map(function(e){return e.id}).map(function(e,t,a){return a.indexOf(e)===t&&t}).filter(function(e){return e!==a}).map(function(e){return t[e]});localStorage.setItem("watchlist",JSON.stringify(o)),this.setState({show:"none"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"card",style:{display:this.state.show,border:"none",background:"transparent"}},r.a.createElement("img",{alt:"no availabel",width:"210",height:"315",src:this.props.movie.poster_src}),r.a.createElement("div",{className:"card-img-overlay",onClick:this.openModal},r.a.createElement("center",null,r.a.createElement("p",{className:"summary-title"},this.props.movie.title),r.a.createElement("p",{className:"summary"},this.props.movie.overview))),r.a.createElement(f.a,{modal:!0,open:this.state.open,closeOnDocumentClick:!0,onClose:this.closeModal,lockScroll:!0},r.a.createElement(M,{movieid:this.props.movie.id,close:this.closeModal,genre:this.state.rows})),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"title"},this.props.movie.title),r.a.createElement("div",{className:"row",id:"card-info"},r.a.createElement("div",{className:"col-8"},r.a.createElement("p",{className:"genre "},"Genre:\xa0",r.a.createElement("span",null,this.state.rows))),r.a.createElement("div",{className:"col-4",style:{textAlign:"right",paddingRight:0}},r.a.createElement("p",{className:"year "},"Year: ",r.a.createElement("span",null,this.props.movie.year))))),r.a.createElement("div",{className:"rating"},r.a.createElement("p",null,this.state.rating)),r.a.createElement(h.a,{className:"remove",onClick:this.removeItem.bind(this),style:{backgroundColor:"#50E3C2",color:"#2B3247"}},"Remove"))}}]),t}(r.a.Component)),I=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={bgColor1:"#2B3247",bgColor2:"#2B3247",bgColor3:"#2B3247",bgColor4:"#2B3247",bgColor5:"#2B3247",bgColor6:"#50E3C2",color5:"#8C93AA",color6:"#FFFFFF",pagetitle:"All Movies",hrwidth:"120px",showbutton:"block",searchhome:a.searchChangeHandler.bind(Object(d.a)(Object(d.a)(a)))};a.showPopularMovie();return a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"showPopularMovie",value:function(){var e=this;v.a.ajax({url:"https://api.themoviedb.org/3/movie/popular?api_key=eecba05d00048fe0d5d543c51d4e8e65&language=en-US",success:function(t){var a=t.results,o=[];a.forEach(function(e){e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear();var t=r.a.createElement(x,{key:e.id,movie:e});o.push(t)}),e.setState({rows:o,bgColor1:"#50E3C2",bgColor2:"#2B3247",bgColor3:"#2B3247",bgColor4:"#2B3247",color1:"#000",color4:"#fff",color2:"#fff",color3:"#fff"})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"showTopRatedMovie",value:function(){var e=this;v.a.ajax({url:"https://api.themoviedb.org/3/movie/top_rated?api_key=eecba05d00048fe0d5d543c51d4e8e65&language=en-US",success:function(t){var a=t.results,o=[];a.forEach(function(e){e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear();var t=r.a.createElement(x,{key:e.id,movie:e});o.push(t)}),e.setState({rows:o,bgColor2:"#50E3C2",bgColor1:"#2B3247",bgColor3:"#2B3247",bgColor4:"#2B3247",color2:"#000",color1:"#fff",color4:"#fff",color3:"#fff"})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"showUpcomingMovie",value:function(){var e=this;v.a.ajax({url:"https://api.themoviedb.org/3/movie/upcoming?api_key=eecba05d00048fe0d5d543c51d4e8e65&language=en-US",success:function(t){var a=t.results,o=[];a.forEach(function(e){e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear();var t=r.a.createElement(x,{key:e.id,movie:e});o.push(t)}),e.setState({rows:o,bgColor3:"#50E3C2",bgColor2:"#2B3247",bgColor1:"#2B3247",bgColor4:"#2B3247",color3:"#000",color1:"#fff",color2:"#fff",color4:"#fff"})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"showNowPlayMovie",value:function(){var e=this;v.a.ajax({url:"https://api.themoviedb.org/3/movie/now_playing?api_key=eecba05d00048fe0d5d543c51d4e8e65&language=en-US",success:function(t){var a=t.results,o=[];a.forEach(function(e){e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear();var t=r.a.createElement(x,{key:e.id,movie:e});o.push(t)}),e.setState({rows:o,bgColor4:"#50E3C2",bgColor2:"#2B3247",bgColor3:"#2B3247",bgColor1:"#2B3247",color4:"#000",color1:"#fff",color2:"#fff",color3:"#fff"})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"performSearch",value:function(e){var t=this,a=N+"/search/movie?api_key="+w+"&query="+e;v.a.ajax({url:a,success:function(e){var a=e.results,o=[];a.forEach(function(e){if(!Object(g.isNull)(e.poster_path)){e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear();var t=r.a.createElement(x,{key:e.id,movie:e});o.push(t)}}),t.setState({rows:o,bgColor1:"#2B3247",color1:"#fff"})},error:function(e,t,a){console.error("Failed to fetch data")}})}},{key:"searchChangeHandler",value:function(e){var t=e.target.value;if(""===e.target.value||null===e.target.value)this.showPopularMovie();else this.performSearch(t)}},{key:"searchChangeHandler1",value:function(e){if(console.log("search in watchlist"),""===e.target.value||null===e.target.value)this.showWatchlist();else{var t=localStorage.getItem("watchlist"),a=JSON.parse(t),o=[],l=e.target.value.toLowerCase(),s=a.filter(function(e){return-1!==e.title.toLowerCase().indexOf(l)});console.log(s),Object(g.isNull)(s)||s.forEach(function(e){console.log(e),e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear(),console.log(e.id);var t=r.a.createElement(B,{key:e.id,movie:e});o.push(t)}),this.setState({rows:o})}}},{key:"showAllMovie",value:function(){this.showPopularMovie();this.setState({bgColor5:"#2B3247",bgColor6:"#50E3C2",color5:"#8C93AA",color6:"#FFFFFF",pagetitle:"All Movies",hrwidth:"120px",showbutton:"block",searchhome:this.searchChangeHandler.bind(this)})}},{key:"showWatchlist",value:function(){var e=localStorage.getItem("watchlist"),t=JSON.parse(e),a=[];Object(g.isNull)(t)||t.forEach(function(e){console.log(e),e.poster_src=C+"/w185"+e.poster_path,e.year=new Date(e.release_date).getFullYear(),console.log(e.id);var t=r.a.createElement(B,{key:e.id,movie:e});a.push(t)}),this.setState({bgColor5:"#50E3C2",bgColor6:"#2B3247",color5:"#FFFFFF",color6:"#8C93AA",pagetitle:"My Watchlist",hrwidth:"145px",showbutton:"none",searchhome:this.searchChangeHandler1.bind(this),rows:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{background:"#50E3C2"},className:"leftside"},r.a.createElement("div",{className:"sideicon1",style:{background:this.state.bgColor5,color:this.state.color5,marginTop:"6em"},onClick:this.showAllMovie.bind(this)},r.a.createElement(F.a,{size:"40px",style:{background:"transparent",borderRadius:"0px"}})),r.a.createElement("div",{className:"sideicon2",style:{background:this.state.bgColor6,color:this.state.color6},onClick:this.showWatchlist.bind(this)},r.a.createElement(F.c,{size:"40px",style:{background:"transparent"}}))),r.a.createElement("div",{className:"rightside"},r.a.createElement("h3",{className:"pgtitle"},this.state.pagetitle),r.a.createElement("hr",{className:"linecopy3",style:{width:this.state.hrwidth}}),r.a.createElement("div",{className:"searchbar"},r.a.createElement(F.b,{style:{color:" #B9BFD1",background:"transparent"},id:"search"}),r.a.createElement("input",{className:"search",placeholder:" Search...",onChange:this.state.searchhome})),r.a.createElement("br",null),r.a.createElement("center",{style:{display:this.state.showbutton}},r.a.createElement(h.a,{className:"btn btn1",onClick:this.showPopularMovie.bind(this),style:{backgroundColor:this.state.bgColor1,color:this.state.color1}},"POPULAR"),r.a.createElement(h.a,{className:"btn btn2",onClick:this.showTopRatedMovie.bind(this),style:{backgroundColor:this.state.bgColor2,color:this.state.color2}},"TOP RATED"),r.a.createElement(h.a,{className:"btn btn3",onClick:this.showUpcomingMovie.bind(this),style:{backgroundColor:this.state.bgColor3,color:this.state.color3}},"UPCOMING"),r.a.createElement(h.a,{className:"btn btn4",onClick:this.showNowPlayMovie.bind(this),style:{backgroundColor:this.state.bgColor4,color:this.state.color4}},"NOW PLAYING")),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},this.state.rows)))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);s.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.eb21a7a5.chunk.js.map