// Vue.component('tabs', {
//
//     template: '<div>\n' +
//         '<div class="tabs">\n' +
//         '    <ul class="nav">\n' +
//         '        <li class=“nav-item”>\n' +
//         '\t\t\t<a class=“nav-link” href="#">{{ tab.name }}</a>\n' +
//         '\t\t</li>\n' +
//         '    </ul>\n' +
//         '</div>\n' +
//         '\n' +
//         '<div class="tab-details">\n' +
//         '    <slot></slot>\n' +
//         '</div>\n' +
//         '</div>\n' +
//         '\n',
//
//     data() {
//
//         return { tabs: [] };
//
//     },
//
//     created() {
//
//        this.tabs = this.$children;
//     }
// });

Vue.component('progress-view', {
    data() {
        return {statusValue: 0};
    }
});

Vue.component('tab', {

    template: '<div><slot></slot></div>',

    props: {
        name: { required: true }
    }
})

Vue.component('card-message', {

    props: ['title', 'body', 'footer'],

    template: '<div class="card"><div class="card-header">{{ title }}</div><div class="card-body">{{ body }}</div><div class="card-footer">{{ footer }}</div></div>',

});

Vue.component('task-list', {

    template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',

    data() {
        return {
            tasks: [
                {task: 'Go to the gym', complete: true},
                {task: 'Check advert', complete: false},
                {task: 'Go to the hub', complete: true},
                {task: 'Go to the farm', complete: false}
            ]
        };
    }
});

Vue.component('task', {

    template: '<li><slot></slot></li>'
});

var app = new Vue({

    el: '#root',

    data: {

        showModal: false

    }
})