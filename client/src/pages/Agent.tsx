import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, Zap, Heart, AlertTriangle, Clock, TrendingUp } from 'lucide-react';
import patientsData from '@/data/patients.json';

interface ScanResult {
  patientId: string;
  urgencyScore: number;
  explanation: string[];
}

export default function Agent() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);
  const [hasScanned, setHasScanned] = useState(false);

  // todo: remove mock functionality - implement real AI analysis
  const runUrgencyScan = async () => {
    setIsScanning(true);
    setHasScanned(false);
    
    // Simulate scanning delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Calculate urgency scores using the weighted algorithm
    const results = patientsData.map(patient => {
      const remainingPercent = ((patient.targetUsd - patient.raisedUsd) / patient.targetUsd) * 100;
      const remainingScore = (100 - remainingPercent) / 100 * 0.40;
      const severityScore = patient.needSeverity / 3 * 0.35;
      const timeScore = Math.min(patient.timeWaitingDays / 100, 1) * 0.25;
      
      // Keyword bumps for critical terms
      let keywordBonus = 0;
      const criticalTerms = ['neural', 'emergency', 'urgent', 'critical', 'cybernetic'];
      const storyLower = patient.story.toLowerCase();
      criticalTerms.forEach(term => {
        if (storyLower.includes(term)) keywordBonus += 0.05;
      });
      
      const urgencyScore = Math.min((remainingScore + severityScore + timeScore + keywordBonus) * 100, 100);
      
      const explanation = [
        `Remaining goal: ${remainingPercent.toFixed(1)}% (weight: 40%)`,
        `Need severity: ${patient.needSeverity}/3 (weight: 35%)`,
        `Wait time: ${patient.timeWaitingDays} days (weight: 25%)`,
        ...(keywordBonus > 0 ? [`Critical keywords detected (+${(keywordBonus * 100).toFixed(1)}%)`] : [])
      ];
      
      return {
        patientId: patient.id,
        urgencyScore,
        explanation
      };
    }).sort((a, b) => b.urgencyScore - a.urgencyScore).slice(0, 3);
    
    setScanResults(results);
    setIsScanning(false);
    setHasScanned(true);
  };

  const handleMint = (patientId: string) => {
    console.log(`Mint triggered for patient ${patientId} from AI recommendation`);
    // todo: implement real mint functionality
  };

  const handleSupport = (patientId: string) => {
    console.log(`Support triggered for patient ${patientId} from AI recommendation`);
    // todo: implement real support functionality
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-cyber font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Agent → Urgency Scan
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          AI-powered analysis to identify the most critical patients requiring immediate support.
        </p>
        <Badge variant="outline" className="mt-4 border-orange-500 text-orange-600">
          Demo Analysis
        </Badge>
      </div>

      {/* AI Agent Image */}
      <div className="mb-8 text-center">
        <img 
          src="/attached_assets/generated_images/AI_agent_digital_assistant_43dc069a.png" 
          alt="AI Agent Digital Assistant" 
          className="w-full max-w-2xl mx-auto h-48 object-cover rounded-lg border border-cyan-500/30 shadow-lg"
        />
      </div>

      {/* Scan Controls */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Urgency Analysis Engine
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <div className="text-center text-sm text-muted-foreground max-w-md">
              Analyzes patient data using weighted scoring: remaining goal (40%), need severity (35%), 
              wait time (25%), plus keyword detection for critical cases.
            </div>
            
            <Button
              onClick={runUrgencyScan}
              disabled={isScanning}
              size="lg"
              className="w-full max-w-xs"
              data-testid="button-run-scan"
            >
              {isScanning ? (
                <>
                  <Brain className="w-4 h-4 mr-2 animate-pulse" />
                  Scanning...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Run Urgency Scan
                </>
              )}
            </Button>

            {isScanning && (
              <div className="w-full max-w-md">
                <Progress value={75} className="h-2" />
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Analyzing patient data...
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Scan Results */}
      {hasScanned && scanResults.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-anime font-bold text-center mb-6">
            Top 3 Priority Cases
          </h2>
          
          {scanResults.map((result, index) => {
            const patient = patientsData.find(p => p.id === result.patientId);
            if (!patient) return null;
            
            const urgencyColor = result.urgencyScore >= 80 ? 'red' : result.urgencyScore >= 60 ? 'yellow' : 'green';
            const progressPercentage = (patient.raisedUsd / patient.targetUsd) * 100;
            
            return (
              <Card key={result.patientId} className="relative overflow-hidden">
                <div className={`absolute left-0 top-0 w-1 h-full bg-${urgencyColor}-500`} />
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          #{index + 1}
                        </Badge>
                        {patient.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{patient.city}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold text-${urgencyColor}-500`} data-testid={`text-urgency-score-${result.patientId}`}>
                        {result.urgencyScore.toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground">Urgency Score</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{patient.story}</p>
                  
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>${patient.raisedUsd.toLocaleString()} / ${patient.targetUsd.toLocaleString()}</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                  
                  {/* Analysis Breakdown */}
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium text-sm">Analysis Breakdown</span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {result.explanation.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-current rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleMint(result.patientId)}
                      className="flex-1"
                      data-testid={`button-mint-recommendation-${result.patientId}`}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Deploy Aid ($10)
                    </Button>
                    <Button
                      onClick={() => handleSupport(result.patientId)}
                      variant="outline"
                      className="flex-1"
                      data-testid={`button-support-recommendation-${result.patientId}`}
                    >
                      <Heart className="w-4 h-4 mr-2" />
                      Support ($5)
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {hasScanned && scanResults.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No critical cases detected at this time.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}