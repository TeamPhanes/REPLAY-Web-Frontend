pipeline {
    agent {
        label 'phanes'
    }
    environment {
        REGISTRY = "harbor.phanescloud.com"
        HARBOR_USER = credentials('harbor')
        HARBOR_PASSWORD = credentials('harbor')
    }
    stages {
        stage('Link & Build') {
            steps {
                sh 'make npm-build'
            }
        }
        stage('Image Build and Push') {
            when {
                expression {
                    return env.CHANGE_ID == null
                }
            }
            steps {
                script {
                    sh 'buildah login -u "${HARBOR_USER}" -p "${HARBOR_PASSWORD}" ${REGISTRY}'
                    sh 'make buildah-push'
                }
            }
        }
    }
}