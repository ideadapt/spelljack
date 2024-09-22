FROM denoland/deno:alpine-1.31.1

WORKDIR /server
COPY server/ .

RUN deno compile -o server --allow-read --allow-net --allow-env ./main.ts

COPY dist/ ./dist

EXPOSE 3000

# TODO run as non root user?

CMD ["./server"]