import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Overview } from '@syncfusion/ej2-diagrams';


export const properties: string[] = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width', 'created'];
export const modelProps: string[] = [];

/**
 * Represents vue Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class OverviewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Overview({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
}

export const OverviewPlugin = {
    name: 'ejs-overview',
    install(Vue: any) {
        Vue.component(OverviewPlugin.name, OverviewComponent);

    }
}
