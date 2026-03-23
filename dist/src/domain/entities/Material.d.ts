export declare function toMaterialDTO(material: Material): {
    id: string;
    name: string;
    stock: number;
    minStock: number;
    unitPrice: number;
    active: boolean;
};
export declare class Material {
    readonly id: string;
    private _name;
    private _stock;
    private _minStock;
    private _unitPrice;
    private _active;
    constructor(id: string, _name: string, _stock: number, _minStock: number, _unitPrice: number, _active?: boolean);
    get name(): string;
    get stock(): number;
    get minStock(): number;
    get unitPrice(): number;
    get active(): boolean;
    updateStock(quantity: number): void;
    consume(quantity: number): void;
    deactive(): void;
    update(name: string, stock: number, minStock: number, unitPrice: number, active: boolean): void;
}
//# sourceMappingURL=Material.d.ts.map