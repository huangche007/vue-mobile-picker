/**
 * Created by THINK on 2017/11/1.
 */
import Picker from './Picker.vue';
Picker.install = Vue => {
    Vue.component('picker', Picker)
}

if (typeof window !== 'undefined' && window.vue) {
    window.Picker = Picker
}

export default Picker