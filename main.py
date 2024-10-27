class QuizApp:
    def __init__(self):
        self.questions = [
            {
                "question": "What is the capital of France?",
                "options": ["A. London", "B. Berlin", "C. Paris", "D. Madrid"],
                "answer": "C"
            },
            {
                "question": "What is 5 + 7?",
                "options": ["A. 10", "B. 11", "C. 12", "D. 13"],
                "answer": "C"
            },
            {
                "question": "What is the largest planet in our Solar System?",
                "options": ["A. Earth", "B. Jupiter", "C. Mars", "D. Saturn"],
                "answer": "B"
            },
            {
                "question": "Who wrote 'Hamlet'?",
                "options": ["A. Charles Dickens", "B. William Shakespeare", "C. Mark Twain", "D. J.K. Rowling"],
                "answer": "B"
            }
        ]
        self.score = 0

    def start_quiz(self):
        print("Welcome to the Quiz!")
        for idx, q in enumerate(self.questions):
            print(f"\nQuestion {idx + 1}: {q['question']}")
            for option in q["options"]:
                print(option)
            answer = input("Your answer (A, B, C, or D): ").upper()
            if answer == q["answer"]:
                print("Correct!")
                self.score += 1
            else:
                print(f"Incorrect! The correct answer was {q['answer']}.")

        self.show_score()

    def show_score(self):
        print(f"\nYour final score is {self.score}/{len(self.questions)}")
        if self.score == len(self.questions):
            print("Congratulations! You got all answers correct.")
        else:
            print("Better luck next time!")

if __name__ == "__main__":
    quiz = QuizApp()
    quiz.start_quiz()
