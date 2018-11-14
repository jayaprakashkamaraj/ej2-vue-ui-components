import Vue from 'vue';
import { setTemplateEngine, getTemplateEngine, getUniqueID, createElement, detach } from "@syncfusion/ej2-base";

// tslint:disable:no-any
let stringCompiler: (template: string, helper?: object) => (data: Object | JSON) => string = getTemplateEngine();

export function compile(templateElement: any, helper?: Object):
    (data: Object | JSON, component?: any, propName?: any) => Object {
    let that = this;
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    } else {
        return (data: any): any => {
            let pid: string = getUniqueID('templateParentDiv');
            let id: string = getUniqueID('templateDiv');
            let ele: HTMLElement = createElement('div', { id: pid, innerHTML: '<div id="' + id + '"></div>' });
            document.body.appendChild(ele);

            let tempObj: any = templateElement.call(that, {});

            let templateVue: any = new Vue(tempObj.template);
            templateVue.$data.data = data || {};
            templateVue.$mount('#' + id);
            
            let returnEle: any = ele.childNodes;
            detach(ele);

            return returnEle;
        };
    }
}

setTemplateEngine({ compile: (compile as any) });
