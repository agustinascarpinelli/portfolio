import React, { useState } from "react";
import messagesEn from '../Lang/en-US.json'
import messagesEs from '../Lang/es-ES.json'
import {IntlProvider} from 'react-intl';

const langContext=React.createContext()

const LangProvider = ({children}) => {
	let defaultLocale;
	let defaultMsg;
	const lang = localStorage.getItem('lang');

	if(lang){
		defaultLocale = lang

		if(lang === 'es-ES'){
			defaultMsg = messagesEs;
		} else if(lang === 'en-US'){
			defaultMsg = messagesEn
		} else {
			defaultLocale = 'en-US'
			defaultMsg = messagesEn
		}
	}
    const [msg,setMsg]=useState(defaultMsg)
    const [locale,setLocale]=useState(defaultLocale)




    const setLang=(lang)=>{
		
        switch(lang){
            case 'es-ES':
				setMsg(messagesEs);
				setLocale('es-ES');
				localStorage.setItem('lang', 'es-ES');
			
				break;
			case 'en-US':
				setMsg(messagesEn);
				setLocale('en-US');
				localStorage.setItem('lang', 'en-US');
			
				break;
			default:
				setMsg(messagesEn);
			    setLocale('en-US');
				localStorage.setItem('lang', 'en-US');
			
        }
    }
    return(

<langContext.Provider value={{setLang:setLang,locale}}>
<IntlProvider locale={locale} messages={msg}>
				{children}
			</IntlProvider>
</langContext.Provider>
    )
}

export {LangProvider, langContext}