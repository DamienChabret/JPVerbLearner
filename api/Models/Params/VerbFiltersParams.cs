using api.models;

public class VerbFilterParams
{
    public List<VerbGroupEnum>? GroupValue { get; set; }
    public List<VerbLevelEnum>? LevelValue { get; set; }
    public List<string>? PolitenessValue { get; set; }
    public List<string>? VormValue { get; set; }
    public List<string>? RevisionsValue { get; set; }
}
