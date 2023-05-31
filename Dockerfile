# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:16-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]

# gcloud builds submit --tag gcr.io/iserveustaging/notificationdashboardstaging
# gcloud run deploy --image gcr.io/iserveustaging/notificationdashboardstaging --platform managed

# gcloud builds submit --tag gcr.io/creditapp-29bf2/notification_dashboard_prod
# gcloud run deploy --image gcr.io/creditapp-29bf2/notification_dashboard_prod --platform managed


# gcloud builds submit --tag gcr.io/creditapp-29bf2/notification_dashboard_pre_prod
# gcloud run deploy --image gcr.io/creditapp-29bf2/notification_dashboard_pre_prod --platform managed