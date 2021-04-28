import Header from "../components/Header/Header";

export default function Projects() {
    return (<>
        <div>

            


            <div class="w-full bg-white p-12">
                <div class="header flex items-end justify-between mb-12">
                    <div class="title">
                        <p class="text-4xl font-bold text-gray-800 mb-4">
                            Projects i have been working on
                        </p>
                        <p class="text-2xl font-light text-gray-400">
                            Include both which are  production ready or still in active development
                         </p>
                    </div>
                    <div class="text-end flex flex-row-reverse">
                        <a href="https://github.com/brunoalfred/" target="_blank">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSI+PC9wYXRoPjxnIHN0cm9rZT0ibm9uZSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgdHJhbnNmb3JtPSJzY2FsZSgxLjcyLDEuNzIpIiByPSIzMCIgZmlsbD0iIzAwMDAwMCI+PC9jaXJjbGU+PHBhdGggZD0iTTg2LDE0Mi43NmMtMzEuMjk3MTIsMCAtNTYuNzYsLTI1LjQ2Mjg4IC01Ni43NiwtNTYuNzZjMCwtMzEuMjk3MTIgMjUuNDYyODgsLTU2Ljc2IDU2Ljc2LC01Ni43NmMzMS4yOTcxMiwwIDU2Ljc2LDI1LjQ2Mjg4IDU2Ljc2LDU2Ljc2YzAsMzEuMjk3MTIgLTI1LjQ2Mjg4LDU2Ljc2IC01Ni43Niw1Ni43NnpNODYsMzcuODRjLTI2LjU1NTA4LDAgLTQ4LjE2LDIxLjYwNDkyIC00OC4xNiw0OC4xNmMwLDI2LjU1NTA4IDIxLjYwNDkyLDQ4LjE2IDQ4LjE2LDQ4LjE2YzI2LjU1NTA4LDAgNDguMTYsLTIxLjYwNDkyIDQ4LjE2LC00OC4xNmMwLC0yNi41NTUwOCAtMjEuNjA0OTIsLTQ4LjE2IC00OC4xNiwtNDguMTZ6IiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTExOS40NjYwNCw4NC4zNDcwOGMwLC01LjcxMjEyIC0yLjI0NDYsLTEwLjg5NDQ4IC01Ljg4MDY4LC0xNC43NDU1NmMwLjY4MTEyLC0zLjc4OTE2IDAuNjAzNzIsLTkuMTE3NzIgLTAuOTI1MzYsLTEzLjcwMTUyYy03LjY5NywwIC0xMy45NTYwOCw1LjkyODg0IC0xNC45Njc0NCw2Ljg4aC0yMi4wMjI4OGMtMS4wMTMwOCwtMC45NDk0NCAtNi45MTI2OCwtNi44OCAtMTQuNjA5NjgsLTYuODhjLTEuMzc2LDQuMTI5NzIgLTEuODY5NjQsOS4wMDA3NiAtMS40NTUxMiwxMi41NDc0Yy00LjMzMDk2LDMuOTMxOTIgLTcuMDY1NzYsOS41ODkgLTcuMDY1NzYsMTUuOTAxNGMwLDExLjg4MTc2IDkuNjMwMjgsMjEuNDI5NDggMjEuNTEyMDQsMjEuNDI5NDhoNC4yMDg4NGMtMy40NDUxNiwxLjU3NzI0IC02LjI1MjIsNC43NDAzMiAtNi44OCw4LjZjLTMuNDQsMCAtOC4zNjYwOCwtMC4zMTMwNCAtMTAuNjMxMzIsLTMuNzExNzZjLTQuMjMxMiwtNi4zNDY4IC02LjE3NDgsLTYuMzQ2OCAtOC4yODg2OCwtNi4zNDY4Yy0yLjExNTYsMCAtMi4yODc2LDIuMTE1NiAtMC4xNzIsNC4yMzEyYzIuMTE1NiwyLjExNTYgMi4xMTU2LDIuMTE1NiA0LjIzMTIsNi4zNDY4YzEuNzQwNjQsMy40ODY0NCA2LjI2MDgsNi4zNjIyOCAxNC44NjA4LDYuMzYyMjh2MTEuMzUyYzAsMCAxMC45MTUxMiwyLjQwOCAxNC42MiwyLjQwOGMzLjcwNDg4LDAgMTQuNjIsLTIuNDA4IDE0LjYyLC0yLjQwOHYtMTYuMjQ1NGMwLC00LjY3NDk2IC0yLjg5MTMyLC04Ljc1ODI0IC02Ljg4LC0xMC41ODY2aDQuMjEyMjhjMTEuODgzNDgsMCAyMS41MTM3NiwtOS41NTExNiAyMS41MTM3NiwtMjEuNDMyOTJ6IiBmaWxsPSIjMzQ5OGRiIj48L3BhdGg+PHBhdGggZD0iTTg2LDE0Ni4yYy0zMy4xOTQyOCwwIC02MC4yLC0yNy4wMDU3MiAtNjAuMiwtNjAuMmMwLC0zMy4xOTQyOCAyNy4wMDU3MiwtNjAuMiA2MC4yLC02MC4yYzMzLjE5NDI4LDAgNjAuMiwyNy4wMDU3MiA2MC4yLDYwLjJjMCwzMy4xOTQyOCAtMjcuMDA1NzIsNjAuMiAtNjAuMiw2MC4yek04NiwyOS4yNGMtMzEuMjk3MTIsMCAtNTYuNzYsMjUuNDYyODggLTU2Ljc2LDU2Ljc2YzAsMzEuMjk3MTIgMjUuNDYyODgsNTYuNzYgNTYuNzYsNTYuNzZjMzEuMjk3MTIsMCA1Ni43NiwtMjUuNDYyODggNTYuNzYsLTU2Ljc2YzAsLTMxLjI5NzEyIC0yNS40NjI4OCwtNTYuNzYgLTU2Ljc2LC01Ni43NnoiIGZpbGw9IiMxZjIxMmIiPjwvcGF0aD48cGF0aCBkPSJNODYsMTM1Ljg4Yy0yNy41MDI4LDAgLTQ5Ljg4LC0yMi4zNzU0OCAtNDkuODgsLTQ5Ljg4YzAsLTI3LjUwNDUyIDIyLjM3NzIsLTQ5Ljg4IDQ5Ljg4LC00OS44OGMyNy41MDI4LDAgNDkuODgsMjIuMzc1NDggNDkuODgsNDkuODhjMCw1LjAzMSAtMC43NDgyLDkuOTk2NjQgLTIuMjIwNTIsMTQuNzYxMDRjLTAuMTQxMDQsMC40NTIzNiAtMC42MjYwOCwwLjcwNjkyIC0xLjA3NSwwLjU2NzZjLTAuNDU0MDgsLTAuMTQxMDQgLTAuNzA4NjQsLTAuNjIwOTIgLTAuNTY3NiwtMS4wNzVjMS40MjI0NCwtNC42MDEgMi4xNDMxMiwtOS4zOTQ2NCAyLjE0MzEyLC0xNC4yNTM2NGMwLC0yNi41NTUwOCAtMjEuNjA0OTIsLTQ4LjE2IC00OC4xNiwtNDguMTZjLTI2LjU1NTA4LDAgLTQ4LjE2LDIxLjYwNDkyIC00OC4xNiw0OC4xNmMwLDI2LjU1NTA4IDIxLjYwNDkyLDQ4LjE2IDQ4LjE2LDQ4LjE2YzEwLjA3MjMyLDAgMTkuNzE4MDgsLTMuMDc1MzYgMjcuODkzMjQsLTguODk0MTJjMC4zODcsLTAuMjc1MiAwLjkyMTkyLC0wLjE4NDA0IDEuMTk4ODQsMC4yMDEyNGMwLjI3NTIsMC4zODcgMC4xODQwNCwwLjkyMzY0IC0wLjIwMTI0LDEuMTk4ODRjLTguNDY5MjgsNi4wMjY4OCAtMTguNDU5MDQsOS4yMTQwNCAtMjguODkwODQsOS4yMTQwNHoiIGZpbGw9IiMxZjIxMmIiPjwvcGF0aD48cGF0aCBkPSJNMTE4LjA0NTMyLDEyMy45NTY5NmMtMC4yNDA4LDAgLTAuNDc5ODgsLTAuMTAxNDggLTAuNjUwMTYsLTAuMjk3NTZjLTAuMzExMzIsLTAuMzU5NDggLTAuMjcxNzYsLTAuOTAzIDAuMDg3NzIsLTEuMjE0MzJjMS4yNzEwOCwtMS4wOTczNiAyLjQ5NzQ0LC0yLjI3NzI4IDMuNjQ5ODQsLTMuNTAzNjRjMC4zMjMzNiwtMC4zNDc0NCAwLjg2ODYsLTAuMzYxMiAxLjIxNDMyLC0wLjAzOTU2YzAuMzQ1NzIsMC4zMjUwOCAwLjM2NDY0LDAuODY4NiAwLjAzOTU2LDEuMjE2MDRjLTEuMTkxOTYsMS4yNzEwOCAtMi40NjQ3NiwyLjQ5MjI4IC0zLjc3ODg0LDMuNjI5MmMtMC4xNjM0LDAuMTQxMDQgLTAuMzYyOTIsMC4yMDk4NCAtMC41NjI0NCwwLjIwOTg0eiIgZmlsbD0iIzFmMjEyYiI+PC9wYXRoPjxwYXRoIGQ9Ik0xMjQuNjg5NjgsMTE2Ljk2MzQ0Yy0wLjE4NDA0LDAgLTAuMzcxNTIsLTAuMDYwMiAtMC41Mjk3NiwtMC4xODA2Yy0wLjM3NDk2LC0wLjI5MjQgLTAuNDQyMDQsLTAuODMyNDggLTAuMTQ5NjQsLTEuMjA3NDRjMi44MzYyOCwtMy42NDI5NiA1LjEyOTA0LC03LjY1NzQ0IDYuODE2MzYsLTExLjkzMzM2YzAuMTczNzIsLTAuNDQzNzYgMC42NzQyNCwtMC42NTcwNCAxLjExNDU2LC0wLjQ4NTA0YzAuNDQyMDQsMC4xNzU0NCAwLjY1ODc2LDAuNjc0MjQgMC40ODMzMiwxLjExNDU2Yy0xLjc0NTgsNC40MjkgLTQuMTIxMTIsOC41ODc5NiAtNy4wNTg4OCwxMi4zNTk5MmMtMC4xNjY4NCwwLjIxODQ0IC0wLjQxOTY4LDAuMzMxOTYgLTAuNjc1OTYsMC4zMzE5NnoiIGZpbGw9IiMxZjIxMmIiPjwvcGF0aD48cGF0aCBkPSJNMTAwLjYyLDEzMy40NzJjLTAuNDc0NzIsMCAtMC44NiwtMC4zODUyOCAtMC44NiwtMC44NnYtMTYuMjQ1NGMwLC00LjE4MTMyIC0yLjUwNDMyLC04LjAyODk2IC02LjM3Nzc2LC05LjgwNTcyYy0wLjM2ODA4LC0wLjE2ODU2IC0wLjU2OTMyLC0wLjU3MTA0IC0wLjQ4MTYsLTAuOTY0OTJjMC4wODYsLTAuMzkzODggMC40MzUxNiwtMC42NzU5NiAwLjgzOTM2LC0wLjY3NTk2aDQuMjEyMjhjMTEuMzg4MTIsMCAyMC42NTM3NiwtOS4yMjk1MiAyMC42NTM3NiwtMjAuNTcyOTJjMCwtNS4yNzAwOCAtMi4wMDU1MiwtMTAuMjk3NjQgLTUuNjQ1MDQsLTE0LjE1Mzg4Yy0wLjE4NzQ4LC0wLjE5NzggLTAuMjcwMDQsLTAuNDczIC0wLjIyMTg4LC0wLjc0MzA0YzAuNTcyNzYsLTMuMTg4ODggMC42NzA4LC04LjEyNyAtMC43MDM0OCwtMTIuNjc2NGMtNi4zMzMwNCwwLjI3ODY0IC0xMS42ODc0LDQuNjg3IC0xMy43Mzc2NCw2LjYxODU2Yy0wLjE1OTk2LDAuMTQ5NjQgLTAuMzg3LDAuMjQ3NjggLTAuNjA1NDQsMC4yNDc2OGgtMjIuMDI0NmMtMC4yMTg0NCwwIC0wLjQyODI4LC0wLjA4MjU2IC0wLjU4ODI0LC0wLjIzMjJsLTAuMTU4MjQsLTAuMTQ5NjRjLTUuMjk0MTYsLTUuMDM0NDQgLTEwLjAyNTg4LC02LjMzOTkyIC0xMy4yMzg4NCwtNi40ODQ0Yy0xLjEzODY0LDMuNzE4NjQgLTEuNjE4NTIsOC4xOTA2NCAtMS4yMjQ2NCwxMS41NzM4OGMwLjAzMjY4LDAuMjc1MiAtMC4wNzIyNCwwLjU0ODY4IC0wLjI3NjkyLDAuNzM2MTZjLTQuMzEwMzIsMy45MTMgLTYuNzgxOTYsOS40NzcyIC02Ljc4MTk2LDE1LjI2NWMwLDExLjM0MzQgOS4yNjU2NCwyMC41NzEyIDIwLjY1MjA0LDIwLjU3MTJoNC4yMDg4NGMwLjQwNDIsMCAwLjc1MzM2LDAuMjgyMDggMC44MzkzNiwwLjY3NzY4YzAuMDg3NzIsMC4zOTM4OCAtMC4xMTM1MiwwLjc5NjM2IC0wLjQ4MTYsMC45NjQ5MmMtMy4zOTUyOCwxLjU1NDg4IC01Ljg0Mjg0LDQuNjAyNzIgLTYuMzg5OCw3Ljk1NWMtMC4wNjcwOCwwLjQxNjI0IC0wLjQyNjU2LDAuNzIyNCAtMC44NDc5NiwwLjcyMjRjLTQuMDEyNzYsMCAtOC45Mjg1MiwtMC40NjYxMiAtMTEuMzQ4NTYsLTQuMDkzNmMtMy45NzQ5MiwtNS45NjMyNCAtNS42NDE2LC01Ljk2MzI0IC03LjU3MzE2LC01Ljk2MzI0Yy0wLjI0MDgsMCAtMC42NjIyLDAuMDM5NTYgLTAuNzcwNTYsMC4zMDYxNmMtMC4xNDc5MiwwLjM1NDMyIDAuMDUzMzIsMS4zMDAzMiAxLjIwNzQ0LDIuNDU2MTZjMi4yMTM2NCwyLjIxMzY0IDIuMjU0OTIsMi4yOTYyIDQuMzkyODgsNi41NzA0YzEuODk1NDQsMy43OTQzMiA2LjkwMDY0LDUuODg0MTIgMTQuMDkxOTYsNS44ODQxMmMwLjQ3NDcyLDAgMC44NiwwLjM4NTI4IDAuODYsMC44NnYxMS4zNTJjMCwwLjQ3NDcyIC0wLjM4NTI4LDAuODYgLTAuODYsMC44NmMtMC40NzQ3MiwwIC0wLjg2LC0wLjM4NTI4IC0wLjg2LC0wLjg2di0xMC41MDA2Yy05Ljk3MDg0LC0wLjIyNTMyIC0xMy41Mjk1MiwtNC4zNDMgLTE0Ljc3MTM2LC02LjgyNjY4Yy0yLjA1MzY4LC00LjEwNTY0IC0yLjA1MzY4LC00LjEwNTY0IC00LjA2OTUyLC02LjEyMzJjLTEuNDk0NjgsLTEuNDk0NjggLTIuMDg2MzYsLTMuMTEzMiAtMS41ODA2OCwtNC4zMzA5NmMwLjM1OTQ4LC0wLjg2ODYgMS4yMTk0OCwtMS4zNjc0IDIuMzU5ODQsLTEuMzY3NGMyLjczMTM2LDAgNC44MzMyLDAuNDY3ODQgOS4wMDQyLDYuNzI4NjRjMS44Mzg2OCwyLjc1ODg4IDUuNzc3NDgsMy4yNjggOS4yMTIzMiwzLjMyMzA0YzAuNjIyNjQsLTIuNjU3NCAyLjI1MTQ4LC01LjA5OTggNC41MjM2LC02Ljg3NDg0aC0xLjE0ODk2Yy0xMi4zMzU4NCwwIC0yMi4zNzIwNCwtOS45OTgzNiAtMjIuMzcyMDQsLTIyLjI4OTQ4YzAsLTYuMTI2NjQgMi41NTQyLC0xMi4wMTkzNiA3LjAyNDQ4LC0xNi4yNDAyNGMtMC4zNTk0OCwtMy43ODkxNiAwLjIyMDE2LC04LjUyNDMyIDEuNTQxMTIsLTEyLjQ4MjA0YzAuMTE4NjgsLTAuMzUwODggMC40NDcyLC0wLjU4ODI0IDAuODE3LC0wLjU4ODI0YzMuNTAxOTIsMCA4LjkzMDI0LDEuMTk3MTIgMTQuOTUwMjQsNi44OGgyMS4zNDM0OGMyLjQ1NDQ0LC0yLjI1NDkyIDguMzM2ODQsLTYuODggMTUuMzA0NTYsLTYuODhjMC4zNjk4LDAgMC42OTgzMiwwLjIzNzM2IDAuODE3LDAuNTg4MjRjMS42MDgyLDQuODE5NDQgMS41OTYxNiwxMC4xNDk3MiAxLjAyODU2LDEzLjY5OThjMy43NTgyLDQuMTM0ODggNS44MjIyLDkuNDUxNCA1LjgyMjIsMTUuMDE5MDRjMCwxMi4yOTI4NCAtMTAuMDM2MiwyMi4yOTI5MiAtMjIuMzczNzYsMjIuMjkyOTJoLTEuMTkxOTZjMi45MzYwNCwyLjM1Mjk2IDQuNzE5NjgsNS45MjAyNCA0LjcxOTY4LDkuNzI2NnYxNi4yNDU0YzAsMC40NzQ3MiAtMC4zODUyOCwwLjg2IC0wLjg2LDAuODZ6IiBmaWxsPSIjMWYyMTJiIj48L3BhdGg+PHBhdGggZD0iTTU4Ljg4OTM2LDc5LjA2ODRjLTAuMTA4MzYsMCAtMC4yMTg0NCwtMC4wMjA2NCAtMC4zMjMzNiwtMC4wNjM2NGMtMC40NDAzMiwtMC4xNzg4OCAtMC42NTE4OCwtMC42ODExMiAtMC40NzEyOCwtMS4xMTk3MmMwLjgxODcyLC0yLjAwNzI0IDIuMDA3MjQsLTMuODI4NzIgMy41MzgwNCwtNS40MTQ1NmMwLjMzMDI0LC0wLjM0MDU2IDAuODc1NDgsLTAuMzUwODggMS4yMTYwNCwtMC4wMjIzNmMwLjM0MjI4LDAuMzMwMjQgMC4zNTI2LDAuODczNzYgMC4wMjQwOCwxLjIxNjA0Yy0xLjM3OTQ0LDEuNDI5MzIgLTIuNDUxLDMuMDY2NzYgLTMuMTg1NDQsNC44NjkzMmMtMC4xMzc2LDAuMzMzNjggLTAuNDU3NTIsMC41MzQ5MiAtMC43OTgwOCwwLjUzNDkyeiIgZmlsbD0iIzFmMjEyYiI+PC9wYXRoPjxwYXRoIGQ9Ik01Ny44OTUyLDg3Ljc1NjEyYy0wLjQxNDUyLDAgLTAuNzgwODgsLTAuMzAyNzIgLTAuODQ3OTYsLTAuNzI1ODRjLTAuMTM3NiwtMC44NzcyIC0wLjIwODEyLC0xLjc3ODQ4IC0wLjIwODEyLC0yLjY3OTc2YzAsLTAuOTE2NzYgMC4wNzIyNCwtMS44MzUyNCAwLjIxMzI4LC0yLjczNDhjMC4wNzU2OCwtMC40Njk1NiAwLjUyNDYsLTAuNzg5NDggMC45ODM4NCwtMC43MTU1MmMwLjQ2Nzg0LDAuMDczOTYgMC43ODk0OCwwLjUxNDI4IDAuNzE1NTIsMC45ODM4NGMtMC4xMjcyOCwwLjgxMDEyIC0wLjE5MjY0LDEuNjM5MTYgLTAuMTkyNjQsMi40NjY0OGMwLDAuODExODQgMC4wNjM2NCwxLjYyMTk2IDAuMTg3NDgsMi40MTE0NGMwLjA3Mzk2LDAuNDY5NTYgLTAuMjQ3NjgsMC45MDk4OCAtMC43MTU1MiwwLjk4Mzg0Yy0wLjA0NDcyLDAuMDA2ODggLTAuMDg5NDQsMC4wMTAzMiAtMC4xMzU4OCwwLjAxMDMyeiIgZmlsbD0iIzFmMjEyYiI+PC9wYXRoPjxwYXRoIGQ9Ik03MS4zMDYwNCwxMDEuMzMyMDhjLTAuMDQ4MTYsMCAtMC4wOTgwNCwtMC4wMDM0NCAtMC4xNDYyLC0wLjAxMjA0Yy01LjkyMDI0LC0xLjAwNjIgLTEwLjk1OTg0LC01LjExNyAtMTMuMTUxMTIsLTEwLjcyOTM2Yy0wLjE3MzcyLC0wLjQ0MjA0IDAuMDQ0NzIsLTAuOTQwODQgMC40ODg0OCwtMS4xMTI4NGMwLjQ0MDMyLC0wLjE3MzcyIDAuOTQwODQsMC4wNDY0NCAxLjExMjg0LDAuNDg4NDhjMS45NzExMiw1LjA1MzM2IDYuNTA2NzYsOC43NTMwOCAxMS44MzcwNCw5LjY1NzhjMC40NjYxMiwwLjA3OTEyIDAuNzgyNiwwLjUyNDYgMC43MDM0OCwwLjk5MjQ0Yy0wLjA3MDUyLDAuNDE3OTYgLTAuNDMzNDQsMC43MTU1MiAtMC44NDQ1MiwwLjcxNTUyeiIgZmlsbD0iIzFmMjEyYiI+PC9wYXRoPjwvZz48ZyBzdHJva2U9Im5vbmUiPjxnIGlkPSJMYXllcl8xIj48Y2lyY2xlIGN4PSI4NC41IiBjeT0iODQuNSIgdHJhbnNmb3JtPSJzY2FsZSgxLjcyLDEuNzIpIiByPSIxNC41IiBmaWxsPSIjZmVmZGVmIj48L2NpcmNsZT48ZyBmaWxsPSIjMWYyMTJiIj48cGF0aCBkPSJNMTQ1LjM0LDE3MmMtMTQuNzAwODQsMCAtMjYuNjYsLTExLjk1OTE2IC0yNi42NiwtMjYuNjZjMCwtMTQuNzAwODQgMTEuOTU5MTYsLTI2LjY2IDI2LjY2LC0yNi42NmMxNC43MDA4NCwwIDI2LjY2LDExLjk1OTE2IDI2LjY2LDI2LjY2YzAsMTQuNzAwODQgLTExLjk1OTE2LDI2LjY2IC0yNi42NiwyNi42NnpNMTQ1LjM0LDEyMi4xMmMtMTIuODAzNjgsMCAtMjMuMjIsMTAuNDE2MzIgLTIzLjIyLDIzLjIyYzAsMTIuODAzNjggMTAuNDE2MzIsMjMuMjIgMjMuMjIsMjMuMjJjMTIuODAzNjgsMCAyMy4yMiwtMTAuNDE2MzIgMjMuMjIsLTIzLjIyYzAsLTEyLjgwMzY4IC0xMC40MTYzMiwtMjMuMjIgLTIzLjIyLC0yMy4yMnoiPjwvcGF0aD48L2c+PGcgZmlsbD0iIzFmMjEyYiI+PHBhdGggZD0iTTE1OS4xLDE1OS45NmMtMC4yMjAxNiwwIC0wLjQ0MDMyLC0wLjA4NDI4IC0wLjYwODg4LC0wLjI1MTEybC0xMi44MzgwOCwtMTIuODM4MDhjLTAuMzM1NCwtMC4zMzU0IC0wLjMzNTQsLTAuODgwNjQgMCwtMS4yMTYwNGMwLjMzNTQsLTAuMzM1NCAwLjg4MDY0LC0wLjMzNTQgMS4yMTYwNCwwbDEyLjgzODA4LDEyLjgzODA4YzAuMzM1NCwwLjMzNTQgMC4zMzU0LDAuODgwNjQgMCwxLjIxNjA0Yy0wLjE2Njg0LDAuMTY2ODQgLTAuMzg3LDAuMjUxMTIgLTAuNjA3MTYsMC4yNTExMnoiPjwvcGF0aD48L2c+PGNpcmNsZSBjeD0iODIuNSIgY3k9IjgyLjUiIHRyYW5zZm9ybT0ic2NhbGUoMS43MiwxLjcyKSIgcj0iNyIgZmlsbD0iIzc4Y2RkNCI+PC9jaXJjbGU+PGcgZmlsbD0iIzFmMjEyYiI+PHBhdGggZD0iTTE0MS45LDE1NC44Yy03LjExMzkyLDAgLTEyLjksLTUuNzg2MDggLTEyLjksLTEyLjljMCwtNy4xMTM5MiA1Ljc4NjA4LC0xMi45IDEyLjksLTEyLjljNy4xMTM5MiwwIDEyLjksNS43ODYwOCAxMi45LDEyLjljMCw3LjExMzkyIC01Ljc4NjA4LDEyLjkgLTEyLjksMTIuOXpNMTQxLjksMTMwLjcyYy02LjE2NDQ4LDAgLTExLjE4LDUuMDE1NTIgLTExLjE4LDExLjE4YzAsNi4xNjQ0OCA1LjAxNTUyLDExLjE4IDExLjE4LDExLjE4YzYuMTY0NDgsMCAxMS4xOCwtNS4wMTU1MiAxMS4xOCwtMTEuMThjMCwtNi4xNjQ0OCAtNS4wMTU1MiwtMTEuMTggLTExLjE4LC0xMS4xOHoiPjwvcGF0aD48L2c+PC9nPjwvZz48cGF0aCBkPSJNMTE4LjY4LDE3MnYtNTMuMzJoNTMuMzJ2NTMuMzJ6IiBpZD0ib3ZlcmxheS1kcmFnIiBmaWxsPSIjZmYwMDAwIiBzdHJva2U9Im5vbmUiIG9wYWNpdHk9IjAiPjwvcGF0aD48L2c+PC9zdmc+" />
                        </a>
                        <a href="https://gitlab.com/brunoalfred/" target="_blank">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTYiIGhlaWdodD0iOTYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTg2LDE1NC4wODMzM2wtMjguNjY2NjcsLTgyLjQxNjY3aDU3LjMzMzMzeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNTQuMDgzMzNsNjQuNSwtODIuNDE2NjdoLTM1LjgzMzMzeiIgZmlsbD0iI2ZmNzA0MyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMzIuNTgzMzMsMTcuOTE2NjdsMTcuOTE2NjcsNTMuNzVoLTM1LjgzMzMzeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNTQuMDgzMzNsNjQuNSwtODIuNDE2NjdsMTAuNzUsMjguNjY2Njd6IiBmaWxsPSIjZmZhNzI2Ij48L3BhdGg+PHBhdGggZD0iTTg2LDE1NC4wODMzM2wtNjQuNSwtODIuNDE2NjdoMzUuODMzMzN6IiBmaWxsPSIjZmY3MDQzIj48L3BhdGg+PHBhdGggZD0iTTM5LjQxNjY3LDE3LjkxNjY3bC0xNy45MTY2Nyw1My43NWgzNS44MzMzM3oiIGZpbGw9IiNlNTM5MzUiPjwvcGF0aD48cGF0aCBkPSJNODYsMTU0LjA4MzMzbC02NC41LC04Mi40MTY2N2wtMTAuNzUsMjguNjY2Njd6IiBmaWxsPSIjZmZhNzI2Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" />
                        </a>
                        <a href="http://bitbucket.org/brunoalfred/" target="_blank">
                            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDI0IDI0IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGQ9Ik0gMTIgMiBDIDguMTE3MTg4IDIgNCAyLjU5Mzc1IDQgNSBDIDQgNi41MTU2MjUgNC41NjY0MDYgMTAuOTAyMzQ0IDQuODQzNzUgMTIuOTM3NSBDIDQuOTM3NSAxMy42MTcxODggNS4zNzEwOTQgMTQuMjE4NzUgNiAxNC41IEMgNiAxNC41IDggMTYgMTIgMTYgQyAxNiAxNiAxOCAxNC41IDE4IDE0LjUgQyAxOC42Mjg5MDYgMTQuMjE4NzUgMTkuMDYyNSAxMy42MTcxODggMTkuMTU2MjUgMTIuOTM3NSBDIDE5LjQzMzU5NCAxMC45MDIzNDQgMjAgNi41MTU2MjUgMjAgNSBDIDIwIDIuNTkzNzUgMTUuODgyODEzIDIgMTIgMiBaIE0gMTIgNCBDIDE1LjgxMjUgNCAxNy44NzUgNS4wNjY0MDYgMTguMDYyNSA1LjUgQyAxOC4wMTE3MTkgNS42MTcxODggMTcuODA0Njg4IDUuNzg5MDYzIDE3LjQ2ODc1IDUuOTY4NzUgQyAxNi41OTM3NSA2LjQ0MTQwNiAxNC43NjE3MTkgNyAxMiA3IEMgOS4xMDU0NjkgNyA3LjIyNjU2MyA2LjM3NSA2LjQwNjI1IDUuOTA2MjUgQyA2LjEyODkwNiA1Ljc1IDUuOTY4NzUgNS42Mjg5MDYgNS45Mzc1IDUuNTMxMjUgQyA2LjA2NjQwNiA1LjExMzI4MSA4LjEyODkwNiA0IDEyIDQgWiBNIDEyIDkgQyAxMy42NTIzNDQgOSAxNSAxMC4zNDc2NTYgMTUgMTIgQyAxNSAxMy42NTIzNDQgMTMuNjUyMzQ0IDE1IDEyIDE1IEMgMTAuMzQ3NjU2IDE1IDkgMTMuNjUyMzQ0IDkgMTIgQyA5IDEwLjM0NzY1NiAxMC4zNDc2NTYgOSAxMiA5IFogTSAxMiAxMSBDIDExLjQ0OTIxOSAxMSAxMSAxMS40NDkyMTkgMTEgMTIgQyAxMSAxMi41NTA3ODEgMTEuNDQ5MjE5IDEzIDEyIDEzIEMgMTIuNTUwNzgxIDEzIDEzIDEyLjU1MDc4MSAxMyAxMiBDIDEzIDExLjQ0OTIxOSAxMi41NTA3ODEgMTEgMTIgMTEgWiBNIDYuMTI1IDE1LjU2MjUgTCA3IDIwIEMgNyAyMCA4IDIyIDEyIDIyIEMgMTYgMjIgMTcgMjAgMTcgMjAgTCAxNy44NzUgMTUuNTYyNSBDIDE3LjQyMTg3NSAxNS44NjMyODEgMTUuNDc2NTYzIDE3IDEyIDE3IEMgOC41MjM0MzggMTcgNi41NzgxMjUgMTUuODYzMjgxIDYuMTI1IDE1LjU2MjUgWiI+PC9wYXRoPjwvc3ZnPg==" />
                        </a>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full" style={{ textDecorationLine: 'none' }}>
                            <img alt="svgImg" class="max-h-40 w-full object-cover" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgwIiBoZWlnaHQ9IjQ4MCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48Zz48cGF0aCBkPSJNODYsMTU0LjA4MzMzbC0yOC42NjY2NywtODIuNDE2NjdoNTcuMzMzMzN6IiBmaWxsPSIjZTUzOTM1Ij48L3BhdGg+PHBhdGggZD0iTTg2LDE1NC4wODMzM2w2NC41LC04Mi40MTY2N2gtMzUuODMzMzN6IiBmaWxsPSIjZmY3MDQzIj48L3BhdGg+PHBhdGggZD0iTTEzMi41ODMzMywxNy45MTY2N2wxNy45MTY2Nyw1My43NWgtMzUuODMzMzN6IiBmaWxsPSIjZTUzOTM1Ij48L3BhdGg+PHBhdGggZD0iTTg2LDE1NC4wODMzM2w2NC41LC04Mi40MTY2N2wxMC43NSwyOC42NjY2N3oiIGZpbGw9IiNmZmE3MjYiPjwvcGF0aD48cGF0aCBkPSJNODYsMTU0LjA4MzMzbC02NC41LC04Mi40MTY2N2gzNS44MzMzM3oiIGZpbGw9IiNmZjcwNDMiPjwvcGF0aD48cGF0aCBkPSJNMzkuNDE2NjcsMTcuOTE2NjdsLTE3LjkxNjY3LDUzLjc1aDM1LjgzMzMzeiIgZmlsbD0iI2U1MzkzNSI+PC9wYXRoPjxwYXRoIGQ9Ik04NiwxNTQuMDgzMzNsLTY0LjUsLTgyLjQxNjY3bC0xMC43NSwyOC42NjY2N3oiIGZpbGw9IiNmZmE3MjYiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" />
                            {/* <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" /> */}
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                    Video
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    Work at home
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    Work at home, remote, is the new age of the job, every person can work at home....
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        
                                        <img alt="profil" src="/images/jasirilogo.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full" style={{ textDecorationLine: 'none' }}>
                            <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" />
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/jasirilogo.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full " style={{ textDecorationLine: 'none' }}>
                            <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" />
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/jasirilogo.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full" style={{ textDecorationLine: 'none' }}>
                            <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" />
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/jasirilogo.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full" style={{ textDecorationLine: 'none' }}>
                            <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" />
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/jasirilogo.jpg" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                        <a href="#" class="w-full block h-full" style={{ textDecorationLine: 'none' }}>
                            <img alt="blog photo" src="/images/jasirilogo.jpg" class="max-h-40 w-full object-cover" />
                            <div class="bg-white dark:bg-gray-800 w-full p-4">
                                <p class="text-indigo-500 text-md font-medium">
                                    Oui
                                </p>
                                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    test
                                </p>
                                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                    The new supercar is here, 543 cv and 140 000$ !!
                                </p>
                                <div class="flex items-center mt-4">
                                    <a href="#" class="block relative">
                                        <img alt="profil" src="/images/jasirilogo.ico" class="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </a>
                                    <div class="flex flex-col justify-between ml-4 text-sm">
                                        <p class="text-gray-800 dark:text-white">
                                            Jean Jacques
                                        </p>
                                        <p class="text-gray-400 dark:text-gray-300">
                                            20 mars 2029 - 6 min read
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </>)
}