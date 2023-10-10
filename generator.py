import openai
import random

openai.api_key = "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"


def comp(PROMPT, MaxToken=50, outputs=3): 
    # using OpenAI's Completion module that helps execute  
    # any tasks involving text  
    response = openai.Completion.create( 
        # model name used here is text-davinci-003 
        # there are many other models available under the  
        # umbrella of GPT-3 
        model="text-davinci-003", 
        # passing the user input  
        prompt=PROMPT, 
        # generated output can have "max_tokens" number of tokens  
        max_tokens=MaxToken, 
        # number of outputs generated in one call 
        n=outputs,

        temperature=0.6
    ) 
   
     
    return response.choices[0].text




PROMPT = """Generate 10 recipes in the following json format and mood:
{
"recipes": 
[
 {  
"mood": "",  
"name": "recipe_name", 
"description": "brief_description", 
"prepTime": "preparation_time",
 "ingredients": ["ingredient1", "ingredient2", "ingredient3"],
   "steps": ["step1", "step2", "step3"]
}
]

Mood category:
- **Cozy & Comforting:**
    - Characteristics: Warm, hearty, and familiar.
}
    
"""

output = comp(PROMPT, MaxToken=3900, outputs=1)

#print(output)

#  save to file

with open('recipes' + str(random.randint(0,1000000)) + '.json', 'w') as f:
    f.write(output)
    f.close()



