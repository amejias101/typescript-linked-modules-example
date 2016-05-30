
import IParentClass = require('parent-package/parent-interface');
import ParentClass = require('parent-package/parent-class');
import INestedParentClass = require('parent-package/nested/nested-parent-interface');
import NestedParentClass = require('parent-package/nested/nested-parent-class');

class NewClass implements IParentClass {
  name: string;
  age: number;
}

class NewNestedClass implements INestedParentClass {
  name: string;
  age: number;
  email: string;
}

var parentClass = new ParentClass();
parentClass.name = "John Smith";
parentClass.age = 33;

console.log(parentClass);

var nestedParentClass = new NestedParentClass();
nestedParentClass.name = "Sally Jones";
nestedParentClass.age = 25;
nestedParentClass.email = "sally@jones.com";

console.log(nestedParentClass);
