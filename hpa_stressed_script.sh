#!/bin/bash

# Arrays for service URLs, HPA names, and app labels
SERVICE_URLS=("http://34.149.20.229/api/farmers" "http://34.149.20.229/api/product")
HPA_NAMES=("farming-hpa" "products-hpa")
APP_LABELS=("farming" "products")

# Function to perform load test and monitor HPA and pods
perform_test() {
  SERVICE_URL=$1
  HPA_NAME=$2
  APP_LABEL=$3

  echo "Performing load test for $SERVICE_URL"

  # Perform load test
  hey -n 500000 -c 200 $SERVICE_URL &

  # Capture the PID of the hey process
  HEY_PID=$!

  # Monitor HPA
  kubectl get hpa $HPA_NAME -w &
  HPA_PID=$!

  # Monitor pods
  kubectl get pods -l app=$APP_LABEL --watch &
  PODS_PID=$!

  # Wait for load test to complete
  wait $HEY_PID

  # Stop monitoring
  kill $HPA_PID
  kill $PODS_PID

  echo "Stress test completed for $SERVICE_URL. Check the HPA and pod scaling results."
}

# Iterate over the arrays and run the test for each service
for i in "${!SERVICE_URLS[@]}"; do
  perform_test "${SERVICE_URLS[$i]}" "${HPA_NAMES[$i]}" "${APP_LABELS[$i]}"
done
