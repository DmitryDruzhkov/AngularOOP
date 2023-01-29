

export class Course {
  constructor(public type: string, public name: string, public price: number) {}

  getColor(): string {
    return "grey";
  }
}

export class EngCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

   public override getColor() {
    if (this.price > 500) {
      return "red";
    } else {
      return "blue";
    }
  }
}

export class HistCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  public override getColor() {
    if (this.price < 400) {
      return "red";
    } else {
      return "yellow";
    }
  }
}

export class JavaCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  public override getColor() {
    if (this.price > 500) {
      return "red";
    } else {
      return "blue";
    }
  }
}

export class MathCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  public override getColor() {
    return "red";
  }
}

export class NodeCourse extends Course {
  constructor(type: string, name: string, price: number) {
    super(type, name, price);
  }

  public override getColor() {
    return "blue";
  }
}
