"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _records = _interopRequireDefault(require("../../lib/records"));

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import redis from 'redis';
var init = {};
init['taskList'] = {
  state: false,
  list: [{
    taskNumber: 2368,
    taskDate: 1605678382064,
    customerName: 'ООО "РогаДлинноеНазваниеКомпании"',
    supplyerName: 'ИП Иванов И.И.',
    supplyerPhone: '+7 900 111 22 33',
    comments: 'звонить после 19.00 МСК',
    atiCode: 12345
  }, {
    taskNumber: 2378,
    taskDate: 1605668382064,
    customerName: 'ООО "Рога им. А. С. Пушкина"',
    supplyerName: 'ИП Иванов И.И.',
    supplyerPhone: '+7 900 111 22 33',
    comments: 'звонить после 19.00 МСК в будние дни',
    atiCode: 12346
  }, {
    taskNumber: 2381,
    taskDate: 1605658382064,
    customerName: 'ООО "Рога"',
    supplyerName: 'ИП Иванов И.И.',
    supplyerPhone: '+7 900 111 22 33',
    comments: 'звонить после 19.00 МСК, в любой день кроме праздничных дней',
    atiCode: 12347
  }]
};
var records = new _records["default"]();
var initLocalStorage = records.getRecord("yeti".concat(_constants.VERSION));

if (initLocalStorage !== null) {
  init = initLocalStorage;
}

records.setRecord("yeti".concat(_constants.VERSION), init);
var _default = init;
exports["default"] = _default;