function generateResults() {
    const results = {
        sincerity: document.getElementById('sincerity').value,
        fairness: document.getElementById('fairness').value,
        greedAvoidance: document.getElementById('greedAvoidance').value,
        modesty: document.getElementById('modesty').value,
        fearfulness: document.getElementById('fearfulness').value,
        anxiety: document.getElementById('anxiety').value,
        dependence: document.getElementById('dependence').value,
        sentimentality: document.getElementById('sentimentality').value,
        socialSelfEsteem: document.getElementById('socialSelfEsteem').value,
        socialBoldness: document.getElementById('socialBoldness').value,
        sociability: document.getElementById('sociability').value,
        liveliness: document.getElementById('liveliness').value,
        forgiveness: document.getElementById('forgiveness').value,
        gentleness: document.getElementById('gentleness').value,
        flexibility: document.getElementById('flexibility').value,
        patience: document.getElementById('patience').value,
        organization: document.getElementById('organization').value,
        diligence: document.getElementById('diligence').value,
        perfectionism: document.getElementById('perfectionism').value,
        prudence: document.getElementById('prudence').value,
        aestheticAppreciation: document.getElementById('aestheticAppreciation').value,
        inquisitiveness: document.getElementById('inquisitiveness').value,
        creativity: document.getElementById('creativity').value,
        unconventionality: document.getElementById('unconventionality').value,
        altruism: document.getElementById('altruism').value
    };

    document.getElementById('results').innerHTML = `
        <h2>결과</h2>
        <p>정직-겸손 (HONESTY-HUMILITY): ${results.sincerity}</p>
        <ul>
            <li>정성 (Sincerity): ${results.sincerity}</li>
            <li>공정성 (Fairness): ${results.fairness}</li>
            <li>탐욕 회피 (Greed Avoidance): ${results.greedAvoidance}</li>
            <li>겸손 (Modesty): ${results.modesty}</li>
        </ul>
        <p>감정성 (EMOTIONALITY): ${results.fearfulness}</p>
        <ul>
            <li>공포심 (Fearfulness): ${results.fearfulness}</li>
            <li>불안 (Anxiety): ${results.anxiety}</li>
            <li>의존성 (Dependence): ${results.dependence}</li>
            <li>감상성 (Sentimentality): ${results.sentimentality}</li>
        </ul>
        <p>외향성 (EXTRAVERSION): ${results.socialSelfEsteem}</p>
        <ul>
            <li>사회적 자존감 (Social Self-esteem): ${results.socialSelfEsteem}</li>
            <li>사회적 대담성 (Social Boldness): ${results.socialBoldness}</li>
            <li>사교성 (Sociability): ${results.sociability}</li>
            <li>활발함 (Liveliness): ${results.liveliness}</li>
        </ul>
        <p>우호성 (AGREEABLENESS): ${results.forgiveness}</p>
        <ul>
            <li>용서 (Forgiveness): ${results.forgiveness}</li>
            <li>온화함 (Gentleness): ${results.gentleness}</li>
            <li>유연성 (Flexibility): ${results.flexibility}</li>
            <li>인내심 (Patience): ${results.patience}</li>
        </ul>
        <p>성실성 (CONSCIENTIOUSNESS): ${results.organization}</p>
        <ul>
            <li>조직성 (Organization): ${results.organization}</li>
            <li>근면함 (Diligence): ${results.diligence}</li>
            <li>완벽주의 (Perfectionism): ${results.perfectionism}</li>
            <li>신중함 (Prudence): ${results.prudence}</li>
        </ul>
        <p>개방성 (OPENNESS): ${results.aestheticAppreciation}</p>
        <ul>
            <li>미적 감상 (Aesthetic Appreciation): ${results.aestheticAppreciation}</li>
            <li>호기심 (Inquisitiveness): ${results.inquisitiveness}</li>
            <li>창의성 (Creativity): ${results.creativity}</li>
            <li>비전통성 (Unconventionality): ${results.unconventionality}</li>
        </ul>
        <p>(간헐적) 이타주의 (interstitial Altruism): ${results.altruism}</p>
    `;
}
