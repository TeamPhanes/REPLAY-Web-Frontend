pipeline {
    agent {
        label 'phanes'
    }
    environment {
        REGISTRY = "harbor.phanescloud.com"
    }
    stages {
        stage('Lint & Build') {
            steps {
                sh 'make npm-build'
            }
        }
        stage('Image Build and Push') {
            when {
                expression { return env.CHANGE_ID == null }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'harbor',
                                                     usernameVariable: 'HARBOR_USER',
                                                     passwordVariable: 'HARBOR_PASSWORD')]) {
                    sh "buildah login --username \"$HARBOR_USER\" --password \"$HARBOR_PASSWORD\" ${REGISTRY}"
                }
                sh 'make buildah-push'
            }
        }
    }
}