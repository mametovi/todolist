<template>
  <div>
    <div class="container">
      <div class="btn">
        <h1>Мой День</h1>
        <button v-on:click="removeAll">
          <b-icon icon="trash2"></b-icon>
        </button>
       
      </div>
    </div>
    <div id="todo-list-example">
      <div class="container">
        <div class="list">
          <div class="list-wrap" >
            <ul class="">
              <li
                v-for="(item, key) in todos"
                :key="key"
                v-on:remove="todos.splice(index, 1)"
                :class="{ active: item.completed }"
              >

                <div class="shit" @click="getButton(item)"  >
                  <b-form-checkbox v-model="item.completed" />

                  {{ item.title }}

                  <div class="item-right">
                    {{ item.date }}
                  </div>              
                </div>
              
                <button v-on:click="deleteItem(item)" :class="{ passed: item.completed }">
                  <b-icon icon="trash-fill" scale="1.5" variant="white"></b-icon>
                </button>

                
                <div class="popovers" v-for="(items, key) in alerts" :key="key">

                  <b-button v-b-popover.hover.right="'какойто число'" variant="primary" >
                    <b-icon icon="clock-fill" scale="0.9" variant="black"></b-icon>
                     
                  </b-button>
                    
                </div>
              </li>
            
            </ul>

          </div>
        </div>

        <form>
          <b-icon icon="plus"></b-icon>
          <input
            type="text"
            id="inputPassword5"
            class="form-control"
            placeholder="Добавить задачу"
            v-model="newTodoText"
          />

          <v-date-picker v-model="date">
            <template #default="{ inputValue, inputEvents }">
              <!-- <input class="px-3 py-1 border rounded" :value="inputValue" /> -->
              <b-icon
                icon="calendar2-date"
                :value="inputValue"
                v-on="inputEvents"
              ></b-icon>
            </template>
          </v-date-picker>

          <button v-on:click="addNewTodo">
            <b-icon icon="arrow-bar-up"></b-icon>
          </button>
        </form>
      </div>


      
    </div>

    
  </div>
</template>

<script>
export default {
  name: "todo-list-example",

  data() {
    return {
      newTodoText: "",
      date: "",
      todos: [
        {
          id: 1,
          title: "Помыть посуду",
          completed: false,
          date: "21-02-2021 ",
          passed: false
        },
        {
          id: 2,
          title: "Вынести мусор",
          completed: false,
          date: "21-02-2021 ",
          passed: false
        },
        {
          id: 3,
          title: "Подстричь газон",
          completed: false,
          date: "21-02-2021 ",
          passed: false
        },
      ],

      alerts: [
        {
          id: 1,
          alert: 'dscsdcdscsdc dfv dfv dfv'
        },
        {
          id: 2,
          alert: 'ыйейецейцйец'
        },
        {
          id: 3,
          alert: 'qwrq wqr qwr'
        }
      ],

      nextTodoId: 4,
    };
  },

  methods: {
    addNewTodo: function () {
      
      if (this.newTodoText) {
        this.todos.push({
          title: this.newTodoText,
          date: this.$moment(this.date).format("DD.MM.YYYY"),
          completed: false,
          id: (new Date).getTime(),
          passed: false
        });
      }
    },

    deleteItem(item) {

     this.todos.splice(this.todos.indexOf(item), 1);

      // setTimeout(() => {

      // }, 2000, () => {
        
      // })
    },

    removeAll( ) {
      this.todos.splice(0);

      
    },

    getButton(item) {
      item.completed = !item.completed;
    },

  },
};
</script>


<style>
</style>



