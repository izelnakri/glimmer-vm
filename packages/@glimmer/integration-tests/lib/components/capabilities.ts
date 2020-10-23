import { ComponentCapabilities } from '@glimmer/interfaces';
import { assign } from '@glimmer/util';

export const TEMPLATE_ONLY_CAPABILITIES: ComponentCapabilities = {
  dynamicLayout: false,
  dynamicTag: false,
  prepareArgs: false,
  createArgs: false,
  attributeHook: false,
  elementHook: false,
  dynamicScope: false,
  createCaller: false,
  updateHook: false,
  createInstance: false,
  wrapped: false,
  willDestroy: false,
};

export const CURLY_CAPABILITIES: ComponentCapabilities = {
  dynamicLayout: true,
  dynamicTag: true,
  prepareArgs: true,
  createArgs: true,
  attributeHook: true,
  elementHook: true,
  dynamicScope: true,
  createCaller: true,
  updateHook: true,
  createInstance: true,
  wrapped: true,
  willDestroy: true,
};

export const EMBERISH_CURLY_CAPABILITIES: ComponentCapabilities = assign({}, CURLY_CAPABILITIES, {
  dynamicLayout: false,
  attributeHook: false,
});
