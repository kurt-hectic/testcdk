FROM public.ecr.aws/lambda/python:3.8


# Copy library code
COPY libs/mylib.py ${LAMBDA_TASK_ROOT}


# Copy function code
COPY myimage/app.py ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.lambda_handler" ] 