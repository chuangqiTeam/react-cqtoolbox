
import Dialog from '../index';

function $$(className) {
  return document.body.querySelectorAll(className);
}

describe('Dialog', () => {

  it('测试Dialog.confirm函数onConfirm回调调用.', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();

    Dialog.confirm({
       content: '是否删除',
       onConfirm: onOk,
       onCancel: onCancel,
     });

     $$('[data-react-toolbox="button"]')[0].click();

     expect(onCancel.mock.calls.length).toBe(0);
     expect(onOk.mock.calls.length).toBe(1);
  });

  it('Dialog.confirm函数onCancel回调调用.', () => {
    const onCancel = jest.fn();
    const onOk = jest.fn();

    Dialog.confirm({
       content: '是否删除',
       onConfirm: onOk,
       onCancel: onCancel,
     });

     $$('[data-react-toolbox="button"]')[1].click();

     expect(onCancel.mock.calls.length).toBe(1);
     expect(onOk.mock.calls.length).toBe(0);
  });


})
