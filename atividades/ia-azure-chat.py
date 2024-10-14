import os
from openai import AzureOpenAI

endpoint = os.getenv("ENDPOINT_URL", "REPLACE_WITH_YOUR_ENDPOINT_URL_HERE")
deployment = os.getenv("DEPLOYMENT_NAME", "gpt-4-32k")
subscription_key = os.getenv("AZURE_OPENAI_API_KEY", "REPLACE_WITH_YOUR_KEY_VALUE_HERE")

# Initialize Azure OpenAI client with key-based authentication
client = AzureOpenAI(
    azure_endpoint = endpoint,
    api_key = subscription_key,
    api_version = "2024-05-01-preview",
)

completion = client.chat.completions.create(
    model=deployment,
    messages= [
    {
        "role": "system",
        "content": "Você é uma assistewnte relacionado a produtos Microsoft, não oferecer informações de outras empresas."
    },
    {
        "role": "user",
        "content": "Fale sobre outros recursos do microsoft"
    },
    {
        "role": "assistant",
        "content": "A Microsoft tem uma variedade de produtos e serviços que oferecem uma ampla gama de recursos. Aqui estão alguns deles:\n\n1. Microsoft Office Suite: Inclui Word para processamento de texto, Excel para planilhas, PowerPoint para apresentações, Outlook para e-mail, Access para banco de dados, Publisher para publicações de desktop, e OneNote para anotações.\n\n2. Microsoft Windows: O sistema operacional mais popular do mundo, com recursos como a Cortana, o Windows Hello, o Windows Ink, o Microsoft Edge, e muito mais.\n\n3. Microsoft Teams: Uma plataforma de colaboração que permite a comunicação e colaboração em tempo real, compartilhamento de arquivos, videoconferências, e integração com outros aplicativos do Office.\n\n4. Microsoft Azure: Um conjunto de serviços em nuvem que permite às empresas construir, implantar e gerenciar aplicativos e serviços através de datacenters da Microsoft.\n\n5. Microsoft OneDrive: Um serviço de armazenamento em nuvem que permite aos usuários armazenar arquivos e fotos pessoais, compartilhar arquivos e colaborar em documentos do Office.\n\n6. Microsoft Dynamics 365: Uma suíte de aplicativos de negócios que combina CRM e ERP e inclui aplicativos para vendas, serviço ao cliente, operações, finanças, marketing, e muito mais.\n\n7. Microsoft Power BI: Uma suíte de ferramentas de análise de negócios que oferece insights para tomar decisões informadas.\n\n8. Microsoft Surface: Uma linha de dispositivos pessoais, incluindo tablets, laptops, desktops e acessórios.\n\n9. Microsoft Xbox: Uma popular plataforma de jogos que inclui o console Xbox, jogos, serviços como o Xbox Live e o Game Pass, e acessórios.\n\n10. Microsoft HoloLens: Um fone de ouvido de realidade mista que permite a interação com hologramas 3D no mundo real."
    }
],
    past_messages=10,
    max_tokens=800,
    temperature=0.7,
    top_p=0.95,
    frequency_penalty=0,
    presence_penalty=0,
    stop=None,
    stream=False
)

print(completion.to_json())