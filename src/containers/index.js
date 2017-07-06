module.exports = {
  get Home() { return require("./Home").Home},
  get test1() { return require("./Home/reducer").test1},
  get test2() { return require("./Home/reducer").test2},
  get addAction() { return require("./Home/action").addAction},
  get minusAction() { return require("./Home/action").minusAction},
	get Category() { return require("./Category").Category},
	get User() { return require("./User").User},
}
