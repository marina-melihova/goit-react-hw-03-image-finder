(this["webpackJsonpreact-image-finder"]=this["webpackJsonpreact-image-finder"]||[]).push([[0],{21:function(e,a,t){e.exports={Searchbar:"SearchBar_Searchbar__1pwkb"}},22:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__3Eg_r"}},24:function(e,a,t){e.exports={spinner:"Spinner_spinner__2b2Wp"}},25:function(e,a,t){e.exports={Button:"Button_Button__PvBge"}},26:function(e,a,t){e.exports={note:"Notification_note__16h0M"}},28:function(e,a,t){e.exports={App:"App_App__2oz25"}},29:function(e,a,t){e.exports=t(74)},34:function(e,a,t){},7:function(e,a,t){e.exports={SearchForm:"SearchForm_SearchForm__1GncT",SearchFormButton:"SearchForm_SearchFormButton__pWGnE",SearchFormButtonLabel:"SearchForm_SearchFormButtonLabel__2pRMQ",SearchFormInput:"SearchForm_SearchFormInput__2aqDx"}},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(20),c=t.n(o),l=(t(34),t(10)),m=t(3),i=t(4),u=t(6),s=t(5),g=t(7),h=t.n(g),p=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={inputValue:""},e.handleChange=function(a){e.setState({inputValue:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:h.a.SearchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:h.a.SearchFormButton},r.a.createElement("span",{className:h.a.SearchFormButtonLabel},"Search")),r.a.createElement("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange}))}}]),t}(n.Component),d=t(21),f=t.n(d),y=function(e){var a=e.onSubmit;return r.a.createElement("header",{className:f.a.Searchbar},r.a.createElement(p,{onSubmit:a}))},I=t(8),_=t.n(I),v=function(e){var a=e.image,t=e.setLargeImage;return r.a.createElement("li",{className:_.a.ImageGalleryItem},r.a.createElement("img",{className:_.a.ImageGalleryItemImage,src:a.webformatURL,alt:"super-gallery",onClick:function(){return t(a.largeImageURL)}}))},S=t(22),b=t.n(S),E=function(e){var a=e.images,t=e.setLargeImage;return r.a.createElement("ul",{className:b.a.ImageGallery},a.map((function(e){return r.a.createElement(v,{key:e.id,image:e,setLargeImage:t})})))},w=t(23),F=t.n(w),L=(t(56),t(24)),k=t.n(L),C=function(){return r.a.createElement(F.a,{className:k.a.spinner,type:"Oval",color:"#00BFFF",height:100,width:100})},G=t(25),O=t.n(G),N=function(e){var a=e.loadImages;return r.a.createElement("button",{className:O.a.Button,type:"button",onClick:a},"Load more")},x=t(9),B=t.n(x),j=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleKeyDown=function(a){"Escape"===a.code&&e.props.onClose()},e.handleClick=function(a){"overlay"===a.target.dataset.name&&e.props.onClose()},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement("div",{className:B.a.Overlay,"data-name":"overlay",onClick:this.handleClick},r.a.createElement("div",{className:B.a.Modal,"data-name":"modal"},this.props.children))}}]),t}(n.Component),U=t(26),M=t.n(U),R=function(e){var a=e.message;return r.a.createElement("div",{className:M.a.note},a)},A=t(27),D=t.n(A),Q="17552314-2488ac3d167da7c7e0d9d1cd2",V=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return D.a.get("https://pixabay.com/api/?key=".concat(Q,"&q=").concat(e,"&image_type=photo&orientation=horizontal&page=").concat(a,"&per_page=12")).then((function(e){return{images:e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL}})),total:e.data.total}}))},K=t(28),z=t.n(K),W=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,largeImageUrl:null,pageCount:0},e.setLargeImage=function(a){e.setState({largeImageUrl:a})},e.fetchImages=function(){var a=e.state,t=a.searchQuery,n=a.page;e.setState({loading:!0}),V(t,n).then((function(a){return e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(a.images)),page:e.page+1,pageCount:Math.ceil(a.total/12)}}))})).catch((function(a){return e.setState({error:a})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(a){e.setState({searchQuery:a,page:1,pageCount:0,images:[]})},e}return Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.fetchImages();var t=a.page;this.state.page>t&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.state,t=a.images,n=a.loading,o=a.error,c=a.largeImageUrl,l=a.page,m=a.pageCount;return r.a.createElement("div",{className:z.a.App},o&&r.a.createElement(R,{message:"Something went wrong: ".concat(o.message)}),r.a.createElement(y,{onSubmit:this.handleSearchFormSubmit}),t.length>0&&r.a.createElement(E,{images:t,setLargeImage:this.setLargeImage}),n&&r.a.createElement(C,null),l<=m&&!n&&r.a.createElement(N,{loadImages:this.fetchImages}),l>1&&!m&&r.a.createElement(R,{message:"No images found for your search"}),c&&r.a.createElement(j,{onClose:function(){return e.setLargeImage(null)}},r.a.createElement("img",{src:c,alt:"view large"})))}}]),t}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))},8:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3RhGS",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2F-Lz","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1Ucyk"}},9:function(e,a,t){e.exports={Overlay:"Modal_Overlay__3IK2G",Modal:"Modal_Modal__x_x0B"}}},[[29,1,2]]]);
//# sourceMappingURL=main.3edc2247.chunk.js.map