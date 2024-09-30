chrome.storage.local.get('cumulative_biases', (data) => {
    if (!data.cumulative_biases) {
      chrome.storage.local.set({
        cumulative_biases: {
        //   racial_bias: [],
        //   gender_bias: [],
        //   age_bias: [],
        //   religious_bias: [],
        //   class_bias: [],
        //   disability_bias: [],
        //   sexual_orientation_bias: [],
        //   cultural_bias: [],
        //   body_size_bias: [],
        //   nationalism_ethnocentrism: [],
        //   intersectional_bias: [],
          generalizations: [],
          stereotypes: [],
          unfair_statements: [],
        }
      });
    }
    console.log("clear")
    //const table = document.getElementById("biasTable")
    updateTable(data)
  });

  const updateTable = (cumulative_biases) => {
        const tableBody = document.getElementById("biasTable").getElementsByTagName("tbody")[0];
        const biases = [
            // { key: "racial_bias", name: "Racial Bias", description: "Bias based on race." },
            // { key: "gender_bias", name: "Gender Bias", description: "Bias based on gender." },
            // { key: "age_bias", name: "Age Bias", description: "Bias based on age." },
            // { key: "religious_bias", name: "Religious Bias", description: "Bias against individuals based on religion." },
            // { key: "class_bias", name: "Class Bias", description: "Bias based on social class." },
            // { key: "disability_bias", name: "Disability Bias", description: "Bias against individuals with disabilities." },
            // { key: "sexual_orientation_bias", name: "Sexual Orientation Bias", description: "Bias based on sexual orientation." },
            // { key: "cultural_bias", name: "Cultural Bias", description: "Bias based on cultural background." },
            // { key: "body_size_bias", name: "Body Size Bias", description: "Bias based on body size." },
            // { key: "nationalism_ethnocentrism", name: "Nationalism/Ethnocentrism", description: "Bias favoring one's own nation." },
            // { key: "intersectional_bias", name: "Intersectional Bias", description: "Bias arising from overlapping identities." },
            { key: "generalizations", name: "Generalization", description: "Bias from making general assumptions." },
            { key: "stereotypes", name: "Stereotypes", description: "Bias based on stereotypical beliefs." },
            { key: "unfair_statements", name: "Unfair Statements", description: "Bias represented by unfair statements." },
        ];
    
        // Clear existing rows
        tableBody.innerHTML = "";
    
        let totalSeen = 0;
        console.log("BIAS ARRAY")

        biases.forEach(bias => {
            console.log(cumulative_biases.cumulative_biases)
            const timesSeen = cumulative_biases.cumulative_biases[bias.key].length;
            totalSeen += timesSeen;
    
            // Create a new row
            const newRow = tableBody.insertRow();
    
            // Insert cells
            const cellName = newRow.insertCell(0);
            const cellDescription = newRow.insertCell(1);
            const cellTimesSeen = newRow.insertCell(2);
    
            // Fill cells
            cellName.textContent = bias.name;
            cellDescription.textContent = bias.description;
            cellTimesSeen.textContent = timesSeen;

            
        });    
        document.getElementById("totalseen").textContent = totalSeen;

  }

const loadExistingSettings = () => {

    chrome.storage.local.get(["highlightOn"], (value) => {
        console.log(value, "highlightOn")
        console.log(document.getElementById('demo-copy'))
        if(value.highlightOn)
            document.getElementById('demo-copy').checked=value.highlightOn;
    })
    chrome.storage.local.get(["minC"], (value) => {
        console.log(value, "MIN CHARS")
        if(value.minC)
            document.getElementById('demo-name minChar').value=value.minC;
    })
    chrome.storage.local.get(["maxC"], (value) => {
        console.log(value, "MAX CHARS")
        if(value.maxC)
            document.getElementById('demo-email maxChar').value=value.maxC;
    })
    chrome.storage.local.get(["apiKey"], (value) => {
        console.log(value, "API")
        if(value.apiKey)
            document.getElementById('demo-name apiKey').value=value.apiKey;
    })
}

loadExistingSettings();

function extractAndConcatenateNumbers(str) {
    const numbers = str.match(/\d+/g);
    return numbers ? Number(numbers.join('')) : 0; // Join and convert to a single number or return 0
}


document.getElementById('checkH').addEventListener('click', function() {
    const data = document.getElementById('demo-copy');
    console.log(data.checked)
    chrome.storage.local.set({"highlightOn": !data.checked});
});

document.getElementById("HighlightNow").addEventListener('click', function() {
    console.log("highlight page")
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "highlightPage",
            data: "Hello from the popup!"
        }, (response) => {
            //console.log(response.status, "highlight started");
        });
    });
});

document.getElementById('demo-name minChar').addEventListener('change', function() {
    const data = document.getElementById('demo-name minChar');
    console.log(data.value)
    const value = extractAndConcatenateNumbers(data.value);
    chrome.storage.local.set({"minC": value});
    //chrome.storage.local.set({"highlightOn": data.checked});
});

document.getElementById('demo-email maxChar').addEventListener('change', function() {
    const data = document.getElementById('demo-email maxChar');
    console.log(data.value)
    const value = extractAndConcatenateNumbers(data.value);
    chrome.storage.local.set({"maxC": value});
    //chrome.storage.local.set({"highlightOn": data.checked});
});

document.getElementById('demo-name apiKey').addEventListener('change', function() {
    const data = document.getElementById('demo-name apiKey');
    console.log(data.value)
    chrome.storage.local.set({"apiKey": data.value});
    //chrome.storage.local.set({"highlightOn": data.checked});
});

document.getElementById("Summarize").addEventListener('click', function() {
    console.log("Summarize page")
    chrome.storage.local.get('cumulative_biases', (data) => {
        console.log(data)
        document.getElementById("BiasSummary").innerHTML= `Generating Summary...`;
    })
    summarize();
});


const summarize = async () => {
    console.log("Calling GPT")
    const apiKey = await chrome.storage.local.get('apiKey')
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    const biasesObj = await chrome.storage.local.get('cumulative_biases');
    const biases = biasesObj.cumulative_biases
    let gptMessage = "";
    for (const type in biases) {
        console.log(type)
        gptMessage+=`\nNew Bias: ${type}:`
        const bias =biases[type]
        console.log(bias)
            for(const argument in bias){
              gptMessage+=`\n${bias[argument]}`
              console.log(bias[argument])
            }
        }
    console.log(gptMessage)
    // Prepare the request body
    const messages = [
        {
            role: 'user',
            content: `system_content = "You are a social bias analyzer. Analyze the following and inform me about any prevalent trends. Please respond in html. You will already be inside a <section>, so dont provide the whole page. NO CSS, NO JS. Use just default HTML, everything is already styled. The only css you can add is rows and columns like so to divs: class="row gtr-uniform" or class="col-6 col-12-xsmall." Please analyze the following: ${gptMessage}`
        }
    ];

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey.apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini', // or your preferred model
            messages
        })
    });

    console.log(response)
    const data = await response.json();
    console.log(data)
    const result = data.choices[0].message;
    console.log(result.content)
    result.content = result.content.replace("```html","")
    result.content = result.content.replace("```","");
    document.getElementById("BiasSummary").innerHTML = result.content
}