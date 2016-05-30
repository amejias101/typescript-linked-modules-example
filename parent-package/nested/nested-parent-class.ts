
import INestedParentClass = require('./nested-parent-interface');

class NestedParentClass implements INestedParentClass {
  name: string;
  age: number;
  email: string;
}

export = NestedParentClass;
