<template>
<div>
    <v-dialog v-model="dialogBuild" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">构建记录</v-card-title>
            <template>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">
                          创建时间
                        </th>
                        <th class="text-left">
                          构建记录
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item in build"
                        :key="item.created_at"
                      >
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.report }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </template>
          </v-card>
        </v-dialog>

  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="id"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn @click="getRecords(item)">查看记录</v-btn>
    </template>
  </v-data-table>
</div>
</template>

<script>
  export default {
    data: () => ({
      dialogBuild: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: '名称', value: 'name' },
        { text: '测试用例信息', value: 'testcase_info' },
        { text: '操作', value: 'actions', sortable: false },

      ],
      desserts: [],
      build: []

    }),

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$api.plan.getPlan().then((result) => {
          this.desserts = result.data.msg.data
        }).catch((err) => {
          console.log(err)
        });
      },
      getRecords(item){
        console.log("展示弹窗")
        console.log(item.id)
        this.$api.build.getBuild({"plan_id": item.id}).then((result) => {
          this.build = result.data.msg.data
        }).catch((err) => {
              console.log(err)

        });
        this.dialogBuild = true
      }

      
    },
  }
</script>