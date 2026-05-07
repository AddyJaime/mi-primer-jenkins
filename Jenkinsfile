pipeline {
    agent any

    stages {

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Correr pruebas') {
            steps {
                sh 'npm test'
            }
        }

    }

    post {
        success {
            echo '✅ Todo salió bien!'
        }
        failure {
            echo '❌ Algo falló!'
        }
    }
}