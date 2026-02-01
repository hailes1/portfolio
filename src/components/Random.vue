<template>
  <div>
    <div class="motion-left">
      <cv-breadcrumb :class="motionContainerClass" style="margin-bottom: 16px">
        <cv-list>
          <cv-list-item
            :class="motionContainerClass"
            v-for="item in contents"
            @click.prevent="item.route && navigateTo(item.route)"
          >
            <p v-if="item.subtitle" :class="motionHeaderClass" class="motion-page-text">
              {{ item.subtitle }}
            </p>
          </cv-list-item>
        </cv-list>
      </cv-breadcrumb>
    </div>
    <!-- <div class="motion-right">
      <cv-toggle @change="onChange" v-bind="args">
        <template v-slot:text-left v-if="args.use_textLeft"> 0 </template>
        <template v-slot:text-right v-if="args.use_textRight"> 1 </template>
      </cv-toggle>
    </div> -->
  </div>
</template>
<script>
import { CvBreadcrumb, CvListItem, CvList, CvToggle } from '@carbon/vue'

export default {
  name: 'MotionComponent',
  components: {
    CvBreadcrumb,
    CvListItem,
    CvList,
    CvToggle,
  },
  props: {
    isSwitchOn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      contents: [
        {
          title: 'Introduction to Dev Ops, CI and CD',
        },
        {
          subtitle: `Development Operations: Is a set of paractices which involves People, Process and Technology.

          Developments, Deployment and Testing
          `,
        },
        {
          subtitle: `
          Development is development: Small batches of code, integrate frequently, automate builds and tests. Which are topics that are
          admittedly easier said than done.
          `,
        },
        {
          subtitle: `
          Deployments:A robust system should be staged where there is clear distinction between dev, test(QA), STG and production environments.
          This allows for deployments to be reversible
          Fact: Hestiation to push changes for a rollback increases if a rollback is painful.

          Deployments should be celebrated -- A tale of two ways:

          - I have been part of a team where deployments are sparsed out over 2 weeks:
            What I found intersting, This introduces a clear time frame. The cut of feature branches and UAT environments are all aligned to this deployment window.
            The concept of 3 days: code freeze before deployment (Where QA can do their testing without new code being introduced).
            Finally the promise of Deployment Day: Deployment day is a big event, where everyone is on edge, waiting to see if everything is successful.

          - I have also been part of teams where deployments are done multiple times a day:
            Here, deployments are routine, automated and can be done on demand. They don't require an update of snapshots in a pom file.
            All code is integrated into a mainline branch, and deployments can be triggered at any time.
            This requires a high level of confidence in the automated testing and deployment processes, but also introduces a slight bit of rigidity where developers are
            also QAs. Does this introduce more bugs? Does this introduce quicker fixes and feedback loops?
          `,
        },
        {
          subtitle: `
           Operations: Monitoring and Observability: Work should be monitored, I have never worked as a Product Manager, so I don't really know the details here.
          Maybe it's not time for an introduction of different organizational strategies, Kanban vs 2 Week Sprints: But will dive into that later.
          I think in all cases, Everyone is responsible for the delivery process.
          `,
        },
      ],
    }
  },
  computed: {
    motionContainerClass() {
      return this.isSwitchOn ? 'motion-page-text active' : 'motion-page-text'
    },
    motionHeaderClass() {
      return this.isSwitchOn ? 'motion-page-header active' : 'motion-page-header'
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped lang="scss">
@import 'carbon-components/scss/globals/scss/styles.scss';
/* Container for the two-column layout */
.motion-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Equal split for left and right */
  gap: 32px;
  padding: 40px;
}
.motion-page-header {
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.625rem;
  font-weight: 300;
  line-height: 3.125rem;
  letter-spacing: 0px;
  margin-bottom: 16px;
  color: #d3d3d3;

  &.active {
    color: #000000;
  }
}
.motion-page-text {
  font-family:
    'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier', 'Monospace';
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.33333;
  letter-spacing: 0.32px;
  color: #d3d3d3;

  &.active {
    color: #000000;
  }
}
.motion-left {
  position: absolute;
  top: 100px;
  left: 50px;
  width: 45%;
}

.motion-right {
  position: absolute;
  top: 100px;
  right: 50px;
  width: 45%;
}
</style>
