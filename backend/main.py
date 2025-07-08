import re
from typing import Optional

class NLPSentence(BaseModel):
    sentence: str

class ParsedTransaction(BaseModel):
    amount: float
    category: str
    mode: Optional[str] = "cash"

@app.post("/parse-transaction", response_model=ParsedTransaction)
def parse_transaction(nlp_input: NLPSentence):
    sentence = nlp_input.sentence.lower()

    # Extract amount (e.g., 500 or ₹500)
    amount_match = re.search(r"(?:₹)?(\d+(?:\.\d+)?)", sentence)
    amount = float(amount_match.group(1)) if amount_match else 0.0

    # Extract category (naive approach - after "on" or "for")
    category_match = re.search(r"(?:on|for)\s+([a-zA-Z\s]+?)(?:\s+via|\s*$)", sentence)
    category = category_match.group(1).strip() if category_match else "other"

    # Extract mode (e.g., UPI, cash, card, wallet)
    mode_match = re.search(r"(?:via|using)\s+(upi|cash|card|wallet)", sentence)
    mode = mode_match.group(1).strip() if mode_match else "cash"

    return {
        "amount": amount,
        "category": category,
        "mode": mode
    }
