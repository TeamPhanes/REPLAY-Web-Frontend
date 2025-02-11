pipeline {
    agent {
        label 'phanes'
    }
    environment {
        REGISTRY = "harbor.phanescloud.com"
    }
    stages {
//         stage('Lint & Build') {
//             steps {
//                 sh 'make npm-build'
//             }
//         }
        stage('Image Build and Push') {
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