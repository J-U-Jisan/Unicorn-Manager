<script setup>

import IconDashboard from '@/components/icons/IconDashboard.vue'
import IconTeam from '@/components/icons/IconTeam.vue'
import IconProjects from '@/components/icons/IconProjects.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconDocuments from '@/components/icons/IconDocuments.vue'
import IconReport from '@/components/icons/IconReport.vue'
import IconToDate from '@/components/icons/IconToDate.vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const navigateTo = (routeName) => {
  router.push({name : routeName})
}
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <div class="w-64 bg-white shadow-md flex flex-col">
      <!-- Logo Section -->
      <div class="flex items-center  pl-5 h-16 bg-gray-100 border-b">
        <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <img src="@/assets/logo.svg"  alt="Unicorn Manager"/>
        </div>
      </div>
      <!-- Navigation Links -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-4">
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Dashboard')"
          >
            <icon-dashboard/>
            <span>Dashboard</span>
          </li>
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Team')"
          >
            <icon-team/>
            <span>Team</span>
          </li>
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Projects')"
          >
            <icon-projects/>
            <span>Projects</span>
          </li>
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Calendar')"
          >
            <icon-calendar/>
            <span>Calendar</span>
          </li>
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Documents')"
          >
            <icon-documents/>
            <span>Documents</span>
          </li>
          <li
            class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            @click="navigateTo('Report')"
          >
            <icon-report/>
            <span>Report</span>
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-4 border-gray-300">
        <!-- Teams Section -->
        <div class="space-y-4">
          <h3 class="text-sm text-gray-500">Your teams</h3>
          <ul>
            <li
              class="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer my-2"
              @click="navigateTo('Design')"
            >
              <div class="w-6 h-6 bg-gray-200 flex items-center justify-center rounded text-sm">
                D
              </div>
              <span>Design</span>
            </li>
            <li
              class="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer my-2"
              @click="navigateTo('Engineering')"
            >
              <div class="w-6 h-6 bg-gray-200 flex items-center justify-center rounded text-sm">
                E
              </div>
              <span>Engineering</span>
            </li>
          </ul>
        </div>
        <!-- Divider -->
        <hr class="my-4 border-gray-300">
        <!-- Reports Section -->
        <div class="space-y-4">
          <h3 class="text-sm text-gray-500">Reports</h3>
          <ul>
            <li
              class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer mb-2"
              @click="navigateTo('ReportMonthToDate')"
            >
              <icon-to-date />
              <span>Month to Date</span>
            </li>
            <li
              class="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer"
              @click="navigateTo('ReportYearToDate')"
            >
              <icon-to-date/>
              <span>Year to Date</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

</template>

<style scoped>

</style>
