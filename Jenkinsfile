pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/Mork7/mars-web-dev.git', credentialsId: 'github-pat'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'rsync -avz --delete dist/ /var/www/marswebdev.com'
            }
        }
    }
}
