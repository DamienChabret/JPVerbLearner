using System.Text.Json.Serialization;
using api.models;

public class VerbFilterParams
{
    [JsonPropertyName("groupValue")]
    public List<VerbGroupEnum>? GroupValue { get; set; }

    [JsonPropertyName("levelValue")]
    public List<VerbLevelEnum>? LevelValue { get; set; }

    public bool EqualNull()
    {
        return GroupValue == null && LevelValue == null;
    }
}
