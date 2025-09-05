<template>
  <UCard class="max-w-lg mx-auto">
    <template #header>
      <div class="text-center">
        <UIcon name="i-heroicons-shield-check" class="w-8 h-8 mx-auto mb-2 text-primary-600" />
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          Secure Password Generator
        </h1>
        <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Safe, Fast, Local Generation
        </p>
      </div>
    </template>

    <div class="space-y-6">
      <!-- 密码显示区域 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Generated Password
        </label>
        <div class="flex items-center gap-2">
          <UInput
            v-model="generatedPassword"
            :readonly="true"
            placeholder="Click to generate password"
            class="password-input text-center flex-1"
            size="lg"
          />
          <UButton
            v-if="generatedPassword"
            color="gray"
            variant="outline"
            icon="i-heroicons-clipboard"
            @click="copyPassword"
            :loading="isCopying"
            size="lg"
          />
        </div>
      </div>

      <!-- 密码强度指示器 -->
      <div v-if="generatedPassword">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
            Password Strength:
          </span>
          <span 
            class="text-sm font-medium px-2 py-1 rounded-full text-xs"
            :class="strengthBadgeClass"
          >
            {{ strengthText }}
          </span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 mb-2">
          <div 
            class="h-2 rounded-full transition-all duration-300"
            :class="strengthProgressClass"
            :style="{ width: strengthValue + '%' }"
          ></div>
        </div>
        <div class="text-xs text-gray-500 dark:text-gray-400">
          {{ strengthDescription }}
        </div>
      </div>

      <!-- 密码长度设置 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Password Length: {{ passwordLength }}
        </label>
        <input
          v-model="passwordLength"
          type="range"
          min="6"
          max="32"
          step="1"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>6</span>
          <span>32</span>
        </div>
      </div>

      <!-- 字符类型选择 -->
      <div>
        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Character Types
        </label>
        <div class="grid grid-cols-2 gap-3">
          <UCheckbox
            v-model="charTypes.numbers"
            label="Numbers (0-9)"
            class="text-sm"
          />
          <UCheckbox
            v-model="charTypes.lowercase"
            label="Lowercase (a-z)"
            class="text-sm"
          />
          <UCheckbox
            v-model="charTypes.uppercase"
            label="Uppercase (A-Z)"
            class="text-sm"
          />
          <UCheckbox
            v-model="charTypes.symbols"
            label="Symbols (!@#$%^&*)"
            class="text-sm"
          />
        </div>
      </div>

      <!-- 生成按钮 -->
      <UButton
        @click="generatePassword"
        :disabled="!hasSelectedCharTypes"
        color="primary"
        variant="solid"
        size="lg"
        block
        :loading="isGenerating"
        class="btn-hover"
      >
        <UIcon name="i-heroicons-key" class="w-5 h-5 mr-2" />
        {{ isGenerating ? 'Generating...' : 'Generate Password' }}
      </UButton>

      <!-- 清空按钮 -->
      <UButton
        v-if="generatedPassword"
        @click="clearPassword"
        color="gray"
        variant="outline"
        size="md"
        block
      >
        <UIcon name="i-heroicons-trash" class="w-4 h-4 mr-2" />
        Clear Password
      </UButton>

      <!-- 提示信息 -->
      <UAlert
        v-if="alertMessage"
        :color="alertColor"
        :title="alertMessage"
        @close="alertMessage = ''"
        class="fade-enter-active"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
// 字符集定义
const charSets = {
  numbers: '0123456789',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
}

// 响应式状态
const generatedPassword = ref('')
const passwordLength = ref(12)
const charTypes = ref({
  numbers: true,
  lowercase: true,
  uppercase: true,
  symbols: false
})
const isGenerating = ref(false)
const isCopying = ref(false)
const alertMessage = ref('')
const alertColor = ref('green')

// 计算是否选择了字符类型
const hasSelectedCharTypes = computed(() => {
  return Object.values(charTypes.value).some(selected => selected)
})

// 计算已选择的字符类型数量
const selectedCharTypesCount = computed(() => {
  return Object.values(charTypes.value).filter(selected => selected).length
})

// 计算密码强度
const strengthValue = computed(() => {
  if (!generatedPassword.value) return 0
  
  const length = generatedPassword.value.length
  const typesCount = selectedCharTypesCount.value
  
  if (length < 8 && typesCount <= 1) return 25
  if (length >= 8 && length <= 11 || typesCount === 2) return 50
  if (length >= 12 && typesCount >= 3) return 100
  return 25
})

const strengthText = computed(() => {
  const value = strengthValue.value
  if (value <= 25) return 'Weak'
  if (value <= 50) return 'Medium'
  return 'Strong'
})

const strengthColor = computed(() => {
  const value = strengthValue.value
  if (value <= 25) return 'red'
  if (value <= 50) return 'yellow'
  return 'green'
})

const strengthBadgeClass = computed(() => {
  const color = strengthColor.value
  if (color === 'red') return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  if (color === 'yellow') return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
  return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
})

const strengthProgressClass = computed(() => {
  const color = strengthColor.value
  if (color === 'red') return 'bg-red-500'
  if (color === 'yellow') return 'bg-yellow-500'
  return 'bg-green-500'
})

const strengthDescription = computed(() => {
  const value = strengthValue.value
  if (value <= 25) return 'Consider increasing password length or adding more character types'
  if (value <= 50) return 'Medium password strength, consider further optimization'
  return 'High password strength, good security'
})

// 生成密码函数
async function generatePassword() {
  if (!hasSelectedCharTypes.value) {
    showAlert('Please select at least one character type', 'red')
    return
  }

  isGenerating.value = true
  
  try {
    // 模拟生成延迟，提供更好的用户体验
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let charPool = ''
    Object.entries(charTypes.value).forEach(([type, selected]) => {
      if (selected) {
        charPool += charSets[type]
      }
    })
    
    let password = ''
    for (let i = 0; i < passwordLength.value; i++) {
      password += charPool[Math.floor(Math.random() * charPool.length)]
    }
    
    generatedPassword.value = password
    showAlert('Password generated successfully!', 'green')
  } catch (error) {
    showAlert('Password generation failed, please try again', 'red')
  } finally {
    isGenerating.value = false
  }
}

// 复制密码函数
async function copyPassword() {
  if (!generatedPassword.value) {
    showAlert('Please generate a password first', 'red')
    return
  }

  isCopying.value = true

  try {
    await navigator.clipboard.writeText(generatedPassword.value)
    showAlert('Copied successfully!', 'green')
  } catch (error) {
    // 降级方案：创建临时文本区域
    const textArea = document.createElement('textarea')
    textArea.value = generatedPassword.value
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      showAlert('Copied successfully!', 'green')
    } catch (fallbackError) {
      showAlert('Copy failed, please copy manually', 'red')
    }
    document.body.removeChild(textArea)
  } finally {
    isCopying.value = false
  }
}

// 清空密码函数
function clearPassword() {
  generatedPassword.value = ''
  showAlert('Password cleared', 'gray')
}

// 显示提示信息
function showAlert(message: string, color: string) {
  alertMessage.value = message
  alertColor.value = color
  
  // 3秒后自动隐藏提示
  setTimeout(() => {
    alertMessage.value = ''
  }, 3000)
}

// 监听字符类型变化，如果没有选择任何类型则显示提示
watch(charTypes, (newTypes) => {
  if (!Object.values(newTypes).some(selected => selected)) {
    showAlert('Please select at least one character type', 'red')
  }
}, { deep: true })
</script>
