const buttons = document.querySelectorAll('.nav-btn')
const pages = document.querySelectorAll('.page')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const pageId = button.dataset.page

    buttons.forEach((btn) => btn.classList.remove('active'))
    pages.forEach((page) => page.classList.remove('active'))

    button.classList.add('active')

    const target = document.getElementById(pageId)
    target.classList.add('active')

    target.querySelectorAll('.stat-card, .card').forEach((el, i) => {
      el.style.animation = 'none'
      el.offsetHeight
      el.style.animation = `fadeInUp 0.5s ease ${i * 0.05}s both`
    })
  })
})

document.getElementById('loginBtn').addEventListener('click', () => {
  const selectedRole = document.getElementById('roleSelect').value
  buttons.forEach((btn) => btn.classList.remove('active'))
  pages.forEach((page) => page.classList.remove('active'))

  const targetBtn = document.querySelector(`[data-page="${selectedRole}"]`)
  targetBtn.classList.add('active')

  const target = document.getElementById(selectedRole)
  target.classList.add('active')

  target.querySelectorAll('.stat-card, .card').forEach((el, i) => {
    el.style.animation = 'none'
    el.offsetHeight
    el.style.animation = `fadeInUp 0.5s ease ${i * 0.05}s both`
  })
})

document.getElementById('submitBtn').addEventListener('click', () => {
  const fileInput = document.getElementById('fileInput')
  const message = document.getElementById('submissionMessage')

  if (!fileInput.files.length) {
    showMessage(message, 'Please select a source code file before submitting.', 'error')
    return
  }

  const allowedExtensions = ['.py', '.java', '.cpp', '.js', '.cs']
  const fileName = fileInput.files[0].name.toLowerCase()
  const isValid = allowedExtensions.some((ext) => fileName.endsWith(ext))

  if (!isValid) {
    showMessage(message, 'Invalid file format. Allowed: .py, .java, .cpp, .js, .cs', 'error')
    return
  }

  showMessage(message, 'Submission received! Plagiarism analysis queued.', 'success')
})

function showMessage(el, text, type) {
  el.textContent = text
  el.className = 'message'
  el.classList.add(type)
  el.classList.remove('hidden')
  el.style.animation = 'none'
  el.offsetHeight
  el.style.animation = 'slideIn 0.3s ease'
}

const uploadZone = document.getElementById('uploadZone')
const fileInput = document.getElementById('fileInput')
const browseBtn = document.getElementById('browseBtn')

if (uploadZone) {
  uploadZone.addEventListener('click', () => fileInput.click())

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    uploadZone.classList.add('dragover')
  })

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover')
  })

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault()
    uploadZone.classList.remove('dragover')
    if (e.dataTransfer.files.length) {
      fileInput.files = e.dataTransfer.files
    }
  })
}

if (browseBtn) {
  browseBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    fileInput.click()
  })
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    const label = uploadZone.querySelector('h3')
    if (fileInput.files.length) {
      label.textContent = fileInput.files[0].name
      uploadZone.style.borderColor = 'var(--success)'
    } else {
      label.textContent = 'Drop your file here'
      uploadZone.style.borderColor = ''
    }
  })
}

document.querySelectorAll('.code-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.code-tab').forEach((t) => t.classList.remove('active'))
    tab.classList.add('active')
  })
})