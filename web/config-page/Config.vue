<template>
  <div class="config-page">
    <div class="nav">
      <div class="nav-left" @click="goBack">←</div>
      <div class="nav-title">任务配置</div>
      <div class="nav-right"></div>
    </div>

    <van-cell-group :border="false" title="任务开关">
      <van-cell
        v-for="task in tasks"
        :key="task.enableKey"
        :title="task.fileName"
        @click="toggle(task)"
      >
        <template #right-icon>
          <van-switch
            :value="config[task.enableKey]"
            size="20"
            @input="onSwitch(task, $event)"
            @click.stop
          />
        </template>
      </van-cell>
    </van-cell-group>

    <div class="action-bar">
      <van-button type="primary" round block @click="save">保存配置</van-button>
      <div class="row">
        <van-button size="small" @click="selectAll">全选</van-button>
        <van-button size="small" @click="selectNone">全不选</van-button>
        <van-button size="small" type="warning" @click="reset">重置</van-button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'ConfigPage',
  data() {
    return {
      storageName: 'dhxy-task-config',
      tasks: [
        { enableKey: 'shimenrw_enabled', scriptPath: './师门任务.js', fileName: '师门任务' },
        { enableKey: 'bangpairw_enabled', scriptPath: './帮派任务.js', fileName: '帮派任务' },
        { enableKey: 'baoturw_enabled', scriptPath: './宝图任务.js', fileName: '宝图任务' },
        { enableKey: 'usebaotu_enabled', scriptPath: './使用宝图.js', fileName: '使用宝图' },
        { enableKey: 'dailydraw_enabled', scriptPath: './每日抽卡.js', fileName: '每日抽卡' },
        { enableKey: 'yangyu_reward_enabled', scriptPath: './养育奖励.js', fileName: '养育奖励' },
        { enableKey: 'jiefang_donate_enabled', scriptPath: './街坊捐献.js', fileName: '街坊捐献' },
        { enableKey: 'daily_signin_enabled', scriptPath: './每日签到.js', fileName: '每日签到' },
        { enableKey: 'mail_collect_enabled', scriptPath: './领取邮件.js', fileName: '领取邮件' },
        { enableKey: 'dali_quiz_enabled', scriptPath: './大理答题.js', fileName: '大理答题' },
        { enableKey: 'qinghua_task_enabled', scriptPath: './情花任务.js', fileName: '情花任务' },
        { enableKey: 'wuhuan_task_enabled', scriptPath: './五环任务.js', fileName: '五环任务' },
        { enableKey: 'active_reward_enabled', scriptPath: './活跃奖励.js', fileName: '活跃奖励' },
        { enableKey: 'jingji_task_enabled', scriptPath: './竞技场.js', fileName: '竞技场' },
        { enableKey: 'xiangshi_task_enabled', scriptPath: './科举乡试.js', fileName: '科举乡试' },
        { enableKey: 'shengshi_task_enabled', scriptPath: './科举省试.js', fileName: '科举省试' },
        { enableKey: 'lingxiu_task_enabled', scriptPath: './家园灵修.js', fileName: '家园灵修' },
        { enableKey: 'liangbai_task_enabled', scriptPath: './两百环.js', fileName: '两百环' },
        { enableKey: 'beiju_task_enabled', scriptPath: './无限北俱.js', fileName: '无限北俱' },
        { enableKey: 'guaji_task_enabled', scriptPath: './无限挂机.js', fileName: '无限流程' }
      ],
      config: {}
    };
  },
  created() {
    this.initConfig();
  },
  methods: {
    async initConfig() {
      try {
        const sto = richauto && richauto.storages && richauto.storages.create(this.storageName);
        const defaults = {};
        this.tasks.forEach(t => defaults[t.enableKey] = false);
        const values = {};
        if (sto) {
          for (let i = 0; i < this.tasks.length; i++) {
            const t = this.tasks[i];
            values[t.enableKey] = await sto.get(t.enableKey, defaults[t.enableKey]);
          }
        }
        this.config = Object.assign({}, defaults, values);
      } catch (e) {
        this.$toast && this.$toast('加载失败: ' + (e.message || e));
      }
    },
    onSwitch(task, val) {
      this.$set(this.config, task.enableKey, !!val);
    },
    toggle(task) {
      this.onSwitch(task, !this.config[task.enableKey]);
    },
    async save() {
      try {
        const sto = richauto && richauto.storages && richauto.storages.create(this.storageName);
        if (sto) {
          for (let i = 0; i < this.tasks.length; i++) {
            const t = this.tasks[i];
            await sto.put(t.enableKey, !!this.config[t.enableKey]);
          }
          const all = {};
          this.tasks.forEach(t => all[t.enableKey] = !!this.config[t.enableKey]);
          await sto.put('config_json', JSON.stringify(all));
        }
        this.$toast && this.$toast.success('已保存');
      } catch (e) {
        this.$toast && this.$toast('保存失败: ' + (e.message || e));
      }
    },
    selectAll() {
      this.tasks.forEach(t => this.$set(this.config, t.enableKey, true));
    },
    selectNone() {
      this.tasks.forEach(t => this.$set(this.config, t.enableKey, false));
    },
    reset() {
      this.selectNone();
    },
    goBack() {
      if (history && history.length > 1) {
        history.back();
      }
    }
  }
};
</script>

<style scoped>
.config-page {
  min-height: 100vh;
  background: #f7f8fa;
}
.nav {
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
}
.nav-left {
  width: 40px;
  font-size: 20px;
  cursor: pointer;
}
.nav-title {
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
.nav-right { width: 40px; }
.action-bar {
  position: sticky;
  bottom: 0;
  background: #fff;
  padding: 12px 16px 20px;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.06);
}
.row { display: flex; gap: 8px; margin-top: 10px; }
</style>

