import { defineStore } from 'pinia'
import { computed, ref } from 'vue';
export const useRootStore = defineStore('root', {
  state: () => ({

    stages: [
      {

        columns: [
          {
            titleStage: "Все задачи",
            stageIndex: 0,
            tasks: [
              {
                id: 1707050882754,
                titleTask: "Задача 1",
                bodyTask: "Описание задачи 1",
                detailTask: "Дополнительное описание задачи 1",
                stageTask: 0,
                create: "Sun, 04 Feb 2024 12:17:32 GMT",
              },
              {
                id: 1707050882755,
                titleTask: "Задача 2",
                bodyTask: "Описание задачи 2",
                detailTask: "Дополнительное описание задачи 2",
                stageTask: 0,
                create: "Sun, 04 Feb 2024 12:17:33 GMT",
              }
            ]
          },
          {
            titleStage: "В работе",
            stageIndex: 1,
            tasks: [
              {
                id: 1707050882756,
                titleTask: "Задача 3",
                bodyTask: "Описание задачи 3",
                detailTask: "Дополнительное описание задачи 3",
                stageTask: 1,
                create: "Sun, 04 Feb 2024 12:17:34 GMT",
              },
              {
                id: 1707050882757,
                titleTask: "Задача 4",
                bodyTask: "Описание задачи 4",
                detailTask: "Дополнительное описание задачи 4",
                stageTask: 1,
                create: "Sun, 04 Feb 2024 12:17:35 GMT",
              },
            ]
          },
          {
            titleStage: "Выполнено",
            stageIndex: 2,
            tasks: [
              {
                id: 1707050882758,
                titleTask: "Задача 5",
                bodyTask: "Описание задачи 5",
                detailTask: "Дополнительное описание задачи 5",
                stageTask: 2,
                create: "Sun, 04 Feb 2024 12:17:36 GMT",
              },
              {
                id: 1707050882759,
                titleTask: "Задача 6",
                bodyTask: "Описание задачи 6",
                detailTask: "Дополнительное описание задачи 6",
                stageTask: 2,
                create: "Sun, 04 Feb 2024 12:17:37 GMT",
              }
            ]
          }
        ]
      }
    ],
    selectedStage: 0,
    selectedColumn: 0,
    selectedTask: 0,
    fiteredTasks: [],
    stageArray: [],
    optionInput: [],
    modalVisibleStage: ref(false),
    modalVisibleTask: ref(false),
    modalVisibleEditStage: ref(false),
    modalVisibleEditTask: ref(false),
    modalVisibleDetailTask: ref(false),
    curr: ref(0),
    curT: ref(0)

  }),
  getters: {

    getStages: (state) => state.stages[0]?.columns,
    getCurrentStage: (state) =>
      state.stages[0]?.columns[state.selectedColumn],
    getTask: (state) =>
      state.stages[0]?.columns[state.selectedColumn]?.tasks[
      state.selectedTask
      ],
    getStagesNames: (state) =>
      state.stages[0]?.columns.map((el) => el.titleStage),
  },
  actions: {
    getDateId: () => new Date().now,

    createTask(form) {
    },
    getFilteredTasks(tasks, filterQuery) {
      return console.log(tasks.filter((task) => {
        (task.stageTask === filterQuery)
      }));
    },
    createStageAndTask(stageArray) {
      return
    },
    createArr(arrN) {
    }
  }
})
