export class CreateCarModel {
    constructor (
    public make: string,
    public model: string,
    public engine: string,
    public hp: number,
    public doors: number,
    public gearbox: string,
    public year: number,
    public description: string,
    public price: number,
    public image: string, 
    ) {}
}