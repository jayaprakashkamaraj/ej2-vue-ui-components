import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Tab } from '@syncfusion/ej2-navigations';
import { TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin } from './items.directive'


export const properties: string[] = ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'removed', 'removing', 'selected', 'selecting'];
export const modelProps: string[] = [];

/**
 * Represents the EJ2 VueJS Tab Component.
 * ```html
 * <ejs-tab  :items='tabItems'></ejs-tab>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class TabComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-tabitems":"e-tabitem"};
    public tagNameMapper: Object = {"e-tabitems":"e-items"};
    
    constructor() {
        super();
        this.ej2Instances = new Tab({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addTab(items: Object[], index?: number): void {
        return this.ej2Instances.addTab(items, index);
    }

    public disable(value: boolean): void {
        return this.ej2Instances.disable(value);
    }

    public enableTab(index: number, value: boolean): void {
        return this.ej2Instances.enableTab(index, value);
    }

    public hideTab(index: number, value?: boolean): void {
        return this.ej2Instances.hideTab(index, value);
    }

    public removeTab(index: number): void {
        return this.ej2Instances.removeTab(index);
    }

    public select(args: number | Object): void {
        return this.ej2Instances.select(args);
    }
}

export const TabPlugin = {
    name: 'ejs-tab',
    install(Vue: any) {
        Vue.component(TabPlugin.name, TabComponent);
        Vue.component(TabItemPlugin.name, TabItemDirective);
        Vue.component(TabItemsPlugin.name, TabItemsDirective);

    }
}
