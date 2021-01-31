function cookies(functions)
{
	const container = document.querySelector('.cookies-container');
		const save = document.querySelector('.cookies-save');
		if (!container || !save) return null;

		const localpref = 	JSON.parse(window.localStorage.getItem('cookies-pref'));
		//console.log(localpref);
		if (localpref) activateFunctions(localpref);

function ocultar(){
    var element = document.getElementById("idDaDiv");
          element.classList.add("hide");
}
		function getFormPref()
		{
			return [...document.querySelectorAll('[data-function]')]
			.filter((el) => el.checked )
			.map((el) => el.getAttribute('data-function'));
		
		}

		function activateFunctions(pref)
		{
			pref.forEach((f) => functions[f]);
			//pref.forEach((f) => functions[f]());
			container.style.display = 'none';
			window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
			//console.log(pref);	
			//console.log(functions);
		}

		function handleSave()
		{
			const pref = getFormPref();	
			activateFunctions(pref);
		}
		save.addEventListener('click', handleSave);
}

function nao()
{
	console.log ('Função não aceito');

}

function aceito()
{
	console.log ('Função aceito');

}
cookies({
	nao,
	aceito,

});

function lsTest(){var test='test';try{localStorage.setItem(test,test);localStorage.removeItem(test);return true;}catch(e){return false;}}
if(lsTest()===true){var key=localStorage.getItem('consent');if(!key){jQuery('body').
append("<style>@keyframes show{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}@keyframes hide{0%{transform:translate3d(0,0,0)}99%{transform:translate3d(0,100vh,0)}100%{z-index:0;opacity:0;display:none}}.banner-lgpd-consent-container{position:fixed;left:0;bottom:10px;display:flex;width:100vw;justify-content:center;z-index:2147483646}.banner-lgpd-consent{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:calc(100vw - 20px);max-width:1326px;height:70px;padding:27px;background-color:rgba(64,64,64,.9);box-shadow:0 8px 6px 0 rgba(0,0,0,.41);border-radius:5px;overflow:hidden;transform:translate3d(0,100vh,0);text-align:center}.banner-lgpd-consent__column{padding:0 60px;margin:0 -30px;color:#fff!important;font-size:14px;font-weight:400!important;line-height:16px}.banner-lgpd-consent--version-b .banner-lgpd-consent__title{display:block}.banner-lgpd-consent__link{color:inherit;text-decoration:underline}.banner-lgpd-consent__link:hover{color:inherit;text-decoration:none}.banner-lgpd-consent__accept{position:relative;display:block;width:118px;height:36px;line-height:34px;background:#e9b425;border-radius:1px;cursor:pointer;color:#000!important;border:none;box-shadow:inset 0 -2px 0 0 rgba(0,0,0,.4);transition:all .3s}.banner-lgpd-consent__accept:hover{background:#eab934}.banner-lgpd-consent__accept:active{background:#dca716}.banner-lgpd-consent--show{animation:show 1s both}.banner-lgpd-consent--hide{animation:hide 1s ease-in forwards}@media screen and (max-width:768px){.banner-lgpd-consent-container{bottom:140px}.banner-lgpd-consent{height:auto;padding:34px;font-size:20px;line-height:24px;flex-wrap:wrap}.banner-lgpd-consent__column{width:100%;padding:0;margin:0}.banner-lgpd-consent__accept{width:100%;margin:24px 0 0}}</style> <div class=banner-lgpd-consent-container> <div class='banner-lgpd-consent banner-lgpd-consent--show'> <div class=banner-lgpd-consent__column> Utilizamos cookies e tecnologias semelhantes de acordo com a nossa <a href=/privacy target=_blank class=banner-lgpd-consent__link>Política de Privacidade</a>, e ao continuar navegando, você concorda com estas condições. </div> <div class=banner-lgpd-consent__column> <button class=banner-lgpd-consent__accept>OK</button> </div> </div> </div>");jQuery('.banner-lgpd-consent__accept').on('click',function(){jQuery('.banner-lgpd-consent-container').addClass('banner-lgpd-consent--hide');setTimeout("jQuery('.banner-lgpd-consent-container').remove()",1000);localStorage.setItem('consent',1)});}}