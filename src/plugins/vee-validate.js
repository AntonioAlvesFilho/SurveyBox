import { defineRule } from 'vee-validate'
import {
  required,
  email,
  min,
  min_value,
  max,
  max_value,
  confirmed,
  length,
  alpha_spaces
} from '@vee-validate/rules'
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('min_value', min_value)
defineRule('max', max)
defineRule('max_value', max_value)
defineRule('length', length)
defineRule('alpha_spaces', alpha_spaces)
defineRule('confirmed', confirmed)
