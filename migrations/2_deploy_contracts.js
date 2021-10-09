const TodoList = artifacts.require("./Todolist.sol");

module.exports = function(deployer) {
  deployer.deploy(TodoList);
};