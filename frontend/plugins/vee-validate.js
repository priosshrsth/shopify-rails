import Vue from 'vue'
import VeeValidate from 'vee-validate'

VeeValidate.Validator.extend('object', {
  getMessage: (field, args) => `The ${field} is ${args[0] === 'required' ? 'required' : 'object'}`,
  validate: (value, args) =>
    typeof value === 'object' && (args[0] !== 'required' || Object.keys(value).length > 0),
})

VeeValidate.Validator.extend('after', {
  getMessage: (field, args) => {
    if (args.length < 1 || !moment(args[0]).isValid()) {
      throw new Error('Invalid or no date provided to after rule')
    }
    return `The ${field} must be after ${args[0]}`
  },
  validate: (value, args) => {
    if (args.length < 1 || !args[0] || !moment(args[0]).isValid()) {
      return false
    }
    let diff = 1
    if (args[1] === 'inclusion') {
      diff = 0
    }
    return moment(value).diff(moment(args[0]), 'days') >= diff
  },
})

VeeValidate.Validator.extend('before', {
  getMessage: (field, args) => {
    if (args.length < 1 || !moment(args[0]).isValid()) {
      throw new Error('Invalid or no date provided to after rule')
    }
    return `The ${field} must be before ${args[0]}`
  },
  validate: (value, args) => {
    if (args.length < 1 || !args[0] || !moment(args[0]).isValid()) {
      return false
    }
    let diff = 1
    if (args[1] === 'inclusion') {
      diff = 0
    }
    return moment(args[0]).diff(moment(value), 'days') >= diff
  },
})

Vue.use(VeeValidate)
