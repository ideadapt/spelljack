FROM denoland/deno:alpine-2.1.6

WORKDIR /server
USER deno
COPY server/ .

RUN deno compile -o server --allow-read --allow-net --allow-env ./main.ts

COPY dist/ ./dist

EXPOSE 3000

CMD ["./server"]