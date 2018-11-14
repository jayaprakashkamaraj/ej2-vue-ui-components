import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { ListView } from '@syncfusion/ej2-lists';


export const properties: string[] = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'select'];
export const modelProps: string[] = [];

/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class ListViewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new ListView({});
        this.bindProperties();
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addItem(data: undefined[], fields: Object): void {
        return this.ej2Instances.addItem(data, fields);
    }

    public back(): void {
        return this.ej2Instances.back();
    }

    public checkAllItems(): void {
        return this.ej2Instances.checkAllItems();
    }

    public checkItem(item: Object | Object): void {
        return this.ej2Instances.checkItem(item);
    }

    public disableItem(obj: Object | Object): void {
        return this.ej2Instances.disableItem(obj);
    }

    public enableItem(obj: Object | Object): void {
        return this.ej2Instances.enableItem(obj);
    }

    public findItem(obj: Object | Object): Object {
        return this.ej2Instances.findItem(obj);
    }

    public getSelectedItems(): undefined {
        return this.ej2Instances.getSelectedItems();
    }

    public hideItem(obj: Object | Object): void {
        return this.ej2Instances.hideItem(obj);
    }

    public removeItem(obj: Object | Object): void {
        return this.ej2Instances.removeItem(obj);
    }

    public removeMultipleItems(obj: Object[] | Object[]): void {
        return this.ej2Instances.removeMultipleItems(obj);
    }

    public requiredModules(): undefined {
        return this.ej2Instances.requiredModules();
    }

    public selectItem(obj: Object | Object): void {
        return this.ej2Instances.selectItem(obj);
    }

    public selectMultipleItems(obj: Object[] | Object[]): void {
        return this.ej2Instances.selectMultipleItems(obj);
    }

    public showItem(obj: Object | Object): void {
        return this.ej2Instances.showItem(obj);
    }

    public uncheckAllItems(): void {
        return this.ej2Instances.uncheckAllItems();
    }

    public uncheckItem(item: Object | Object): void {
        return this.ej2Instances.uncheckItem(item);
    }
}

export const ListViewPlugin = {
    name: 'ejs-listview',
    install(Vue: any) {
        Vue.component(ListViewPlugin.name, ListViewComponent);

    }
}
